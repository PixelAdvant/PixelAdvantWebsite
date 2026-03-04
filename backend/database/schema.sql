-- ============================================================
-- PixelAdvant Database Schema
-- Run: mysql -u root -p < schema.sql
-- ============================================================

CREATE DATABASE IF NOT EXISTS pixeladvant_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE pixeladvant_db;

-- ── Users (dashboard login) ──────────────────────────────────
CREATE TABLE IF NOT EXISTS users (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    username    VARCHAR(50)  NOT NULL UNIQUE,
    email       VARCHAR(100) NOT NULL UNIQUE,
    password    VARCHAR(255) NOT NULL,          -- bcrypt hash
    name        VARCHAR(100) NOT NULL,
    role        ENUM('admin','content_creator','marketing') NOT NULL DEFAULT 'marketing',
    is_active   TINYINT(1)   NOT NULL DEFAULT 1,
    created_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at  DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- ── Blog Posts ───────────────────────────────────────────────
CREATE TABLE IF NOT EXISTS blog_posts (
    id           INT AUTO_INCREMENT PRIMARY KEY,
    title        VARCHAR(255) NOT NULL,
    slug         VARCHAR(255) NOT NULL UNIQUE,
    excerpt      TEXT,
    content      LONGTEXT,
    image_url    VARCHAR(500),
    category     VARCHAR(100),
    author_id    INT NOT NULL,
    status       ENUM('draft','published') NOT NULL DEFAULT 'draft',
    views        INT          NOT NULL DEFAULT 0,
    created_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at   DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (author_id) REFERENCES users(id) ON DELETE CASCADE
);

-- ── Jobs (created by admin) ──────────────────────────────────
CREATE TABLE IF NOT EXISTS jobs (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    title           VARCHAR(255) NOT NULL,
    department      VARCHAR(100),
    location        VARCHAR(150),
    type            ENUM('Full-time','Part-time','Contract','Remote') NOT NULL DEFAULT 'Full-time',
    experience      VARCHAR(100),
    description     TEXT,
    requirements    TEXT,
    salary_range    VARCHAR(100),
    is_active       TINYINT(1)   NOT NULL DEFAULT 1,
    created_by      INT NOT NULL,
    created_at      DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at      DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE CASCADE
);

-- ── Job Applications ─────────────────────────────────────────
CREATE TABLE IF NOT EXISTS job_applications (
    id              INT AUTO_INCREMENT PRIMARY KEY,
    job_id          INT,
    full_name       VARCHAR(150) NOT NULL,
    email           VARCHAR(100) NOT NULL,
    phone           VARCHAR(20),
    experience      VARCHAR(100),
    linkedin        VARCHAR(300),
    cover_letter    TEXT,
    status          ENUM('new','reviewed','shortlisted','rejected') NOT NULL DEFAULT 'new',
    applied_at      DATETIME     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (job_id) REFERENCES jobs(id) ON DELETE SET NULL
);

-- ── Contact Form Submissions ─────────────────────────────────
CREATE TABLE IF NOT EXISTS contact_submissions (
    id          INT AUTO_INCREMENT PRIMARY KEY,
    name        VARCHAR(150) NOT NULL,
    email       VARCHAR(100) NOT NULL,
    phone       VARCHAR(20),
    company     VARCHAR(150),
    subject     VARCHAR(255),
    message     TEXT NOT NULL,
    is_read     TINYINT(1)   NOT NULL DEFAULT 0,
    submitted_at DATETIME    NOT NULL DEFAULT CURRENT_TIMESTAMP
);
