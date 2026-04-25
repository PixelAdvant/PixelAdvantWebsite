-- ============================================================
-- PixelAdvant Database Schema (PostgreSQL)
-- Run: psql -U postgres < schema.sql
-- ============================================================

-- Create database
CREATE DATABASE IF NOT EXISTS pixeladvant_db;
\c pixeladvant_db;

-- Create ENUM types
CREATE TYPE user_role AS ENUM ('admin', 'content_creator', 'marketing');
CREATE TYPE post_status AS ENUM ('draft', 'published');
CREATE TYPE job_type AS ENUM ('Full-time', 'Part-time', 'Contract', 'Remote');
CREATE TYPE application_status AS ENUM ('new', 'reviewed', 'shortlisted', 'rejected');

-- ── Users (dashboard login) ──────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id              SERIAL PRIMARY KEY,
    username        VARCHAR(50)  NOT NULL UNIQUE,
    email           VARCHAR(100) NOT NULL UNIQUE,
    password        VARCHAR(255) NOT NULL,          -- bcrypt hash
    name            VARCHAR(100) NOT NULL,
    role            user_role    NOT NULL DEFAULT 'marketing',
    is_active       BOOLEAN      NOT NULL DEFAULT TRUE,
    created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- ── Blog Posts ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
    id              SERIAL PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    slug            VARCHAR(255) NOT NULL UNIQUE,
    excerpt         TEXT,
    content         TEXT,
    image_url       VARCHAR(500),
    category        VARCHAR(100),
    author_id       INTEGER      NOT NULL,
    status          post_status  NOT NULL DEFAULT 'draft',
    views           INTEGER      NOT NULL DEFAULT 0,
    created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ── Jobs (created by admin) ──────────────────────────────────
CREATE TABLE IF NOT EXISTS jobs (
    id              SERIAL PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    department      VARCHAR(100),
    location        VARCHAR(150),
    type            job_type     NOT NULL DEFAULT 'Full-time',
    experience      VARCHAR(100),
    description     TEXT,
    requirements    TEXT,
    salary_range    VARCHAR(100),
    is_active       BOOLEAN      NOT NULL DEFAULT TRUE,
    created_by      INTEGER      NOT NULL,
    created_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- ── Job Applications ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS job_applications (
    id              SERIAL PRIMARY KEY,
    job_id          INTEGER,
    full_name       VARCHAR(150) NOT NULL,
    email           VARCHAR(100) NOT NULL,
    phone           VARCHAR(20),
    experience      VARCHAR(100),
    linkedin        VARCHAR(300),
    cover_letter    TEXT,
    status          application_status NOT NULL DEFAULT 'new',
    applied_at      TIMESTAMP    NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE SET NULL
);

-- ── Contact Form Submissions ─────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
    id              SERIAL PRIMARY KEY,
    name            VARCHAR(150) NOT NULL,
    email           VARCHAR(100) NOT NULL,
    phone           VARCHAR(20),
    company         VARCHAR(150),
    subject         VARCHAR(255),
    message         TEXT        NOT NULL,
    is_read         BOOLEAN     NOT NULL DEFAULT FALSE,
    submitted_at    TIMESTAMP   NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- Create indexes for performance
CREATE INDEX idx_blog_posts_status ON blog_posts(status);
CREATE INDEX idx_blog_posts_category ON blog_posts(category);
CREATE INDEX idx_blog_posts_author_id ON blog_posts(author_id);
CREATE INDEX idx_blog_posts_created_at ON blog_posts(created_at);
CREATE INDEX idx_jobs_is_active ON jobs(is_active);
CREATE INDEX idx_users_username ON users(username);
CREATE INDEX idx_users_email ON users(email);
