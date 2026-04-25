<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sm="http://www.sitemaps.org/schemas/sitemap/0.9"
  exclude-result-prefixes="sm">

  <xsl:output method="html" version="5.0" encoding="UTF-8" indent="yes"/>

  <xsl:template match="/">
    <html lang="en">
      <head>
        <meta charset="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta name="robots" content="noindex, follow"/>
        <title>Sitemap — PixelAdvant</title>
        <style>
          *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

          body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: #f1f5f9;
            color: #1e293b;
            min-height: 100vh;
          }

          /* ── Header ── */
          header {
            background: linear-gradient(135deg, #0f172a 0%, #1e3a5f 100%);
            color: #fff;
            padding: 40px 32px 36px;
            border-bottom: 3px solid #3b82f6;
          }
          .header-inner {
            max-width: 1100px;
            margin: 0 auto;
          }
          .brand {
            display: flex;
            align-items: center;
            gap: 14px;
            margin-bottom: 8px;
          }
          .brand-icon {
            width: 44px;
            height: 44px;
            background: #3b82f6;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-weight: 800;
            font-size: 18px;
            letter-spacing: -0.5px;
            flex-shrink: 0;
          }
          .brand-name {
            font-size: 26px;
            font-weight: 700;
            letter-spacing: -0.3px;
          }
          .brand-name span { color: #3b82f6; }
          header p {
            color: #94a3b8;
            font-size: 14px;
            margin-top: 6px;
            letter-spacing: 0.2px;
          }

          /* ── Stats bar ── */
          .stats {
            background: #fff;
            border-bottom: 1px solid #e2e8f0;
            padding: 16px 32px;
          }
          .stats-inner {
            max-width: 1100px;
            margin: 0 auto;
            display: flex;
            align-items: center;
            gap: 28px;
            flex-wrap: wrap;
          }
          .stat {
            display: flex;
            align-items: center;
            gap: 8px;
            font-size: 13px;
            color: #475569;
          }
          .stat strong {
            font-size: 15px;
            font-weight: 700;
            color: #0f172a;
          }
          .stat-dot {
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #3b82f6;
            flex-shrink: 0;
          }

          /* ── Main ── */
          main {
            max-width: 1100px;
            margin: 28px auto;
            padding: 0 32px 48px;
          }

          /* ── Table ── */
          .table-wrap {
            background: #fff;
            border-radius: 12px;
            border: 1px solid #e2e8f0;
            overflow: hidden;
            box-shadow: 0 1px 3px rgba(0,0,0,.06);
          }
          table {
            width: 100%;
            border-collapse: collapse;
          }
          thead tr {
            background: #f8fafc;
            border-bottom: 2px solid #e2e8f0;
          }
          th {
            padding: 12px 20px;
            text-align: left;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.7px;
            color: #64748b;
            white-space: nowrap;
          }
          tbody tr {
            border-bottom: 1px solid #f1f5f9;
            transition: background 0.12s;
          }
          tbody tr:last-child { border-bottom: none; }
          tbody tr:hover { background: #f8fafc; }
          td {
            padding: 14px 20px;
            font-size: 13.5px;
            vertical-align: middle;
          }

          /* URL cell */
          .url-cell a {
            color: #1d4ed8;
            text-decoration: none;
            font-weight: 500;
            word-break: break-all;
          }
          .url-cell a:hover { color: #1e40af; text-decoration: underline; }

          /* Priority badge */
          .priority {
            display: inline-flex;
            align-items: center;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 700;
            min-width: 44px;
            justify-content: center;
          }
          .p-10 { background:#dcfce7; color:#15803d; }
          .p-09 { background:#dbeafe; color:#1d4ed8; }
          .p-08 { background:#e0e7ff; color:#4338ca; }
          .p-07 { background:#f3e8ff; color:#7e22ce; }
          .p-06 { background:#fef3c7; color:#b45309; }
          .p-05 { background:#fee2e2; color:#b91c1c; }

          /* Frequency badge */
          .freq {
            display: inline-flex;
            align-items: center;
            gap: 5px;
            padding: 3px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 600;
            text-transform: capitalize;
          }
          .freq-weekly  { background:#f0fdf4; color:#16a34a; border:1px solid #bbf7d0; }
          .freq-monthly { background:#eff6ff; color:#2563eb; border:1px solid #bfdbfe; }
          .freq-dot {
            width: 6px; height: 6px; border-radius: 50%;
          }
          .freq-weekly  .freq-dot { background:#16a34a; }
          .freq-monthly .freq-dot { background:#2563eb; }

          /* Lastmod */
          .lastmod { color:#64748b; font-size:12.5px; white-space:nowrap; }

          /* ── Footer ── */
          footer {
            text-align: center;
            padding: 24px;
            color: #94a3b8;
            font-size: 12px;
          }
          footer a { color: #3b82f6; text-decoration: none; }
          footer a:hover { text-decoration: underline; }

          @media (max-width: 680px) {
            header, .stats { padding-left: 16px; padding-right: 16px; }
            main { padding-left: 16px; padding-right: 16px; }
            .col-freq, .col-lastmod { display: none; }
          }
        </style>
      </head>
      <body>

        <header>
          <div class="header-inner">
            <div class="brand">
              <div class="brand-icon">PA</div>
              <div class="brand-name">Pixel<span>Advant</span></div>
            </div>
            <p>XML Sitemap — all publicly indexed pages</p>
          </div>
        </header>

        <div class="stats">
          <div class="stats-inner">
            <div class="stat">
              <div class="stat-dot"></div>
              <span><strong><xsl:value-of select="count(sm:urlset/sm:url)"/></strong> URLs indexed</span>
            </div>
            <div class="stat">
              <div class="stat-dot" style="background:#16a34a;"></div>
              <span><strong><xsl:value-of select="count(sm:urlset/sm:url[sm:changefreq='weekly'])"/></strong> updated weekly</span>
            </div>
            <div class="stat">
              <div class="stat-dot" style="background:#7e22ce;"></div>
              <span><strong><xsl:value-of select="count(sm:urlset/sm:url[sm:priority='1.0'])"/></strong> high-priority</span>
            </div>
          </div>
        </div>

        <main>
          <div class="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>#</th>
                  <th>URL</th>
                  <th>Priority</th>
                  <th class="col-freq">Frequency</th>
                  <th class="col-lastmod">Last Modified</th>
                </tr>
              </thead>
              <tbody>
                <xsl:for-each select="sm:urlset/sm:url">
                  <xsl:variable name="prio" select="sm:priority"/>
                  <xsl:variable name="freq" select="sm:changefreq"/>
                  <tr>
                    <td style="color:#94a3b8;font-size:12px;width:40px;">
                      <xsl:value-of select="position()"/>
                    </td>
                    <td class="url-cell">
                      <a href="{sm:loc}" target="_blank" rel="noopener">
                        <xsl:value-of select="sm:loc"/>
                      </a>
                    </td>
                    <td>
                      <xsl:choose>
                        <xsl:when test="$prio='1.0'"><span class="priority p-10"><xsl:value-of select="$prio"/></span></xsl:when>
                        <xsl:when test="$prio='0.9'"><span class="priority p-09"><xsl:value-of select="$prio"/></span></xsl:when>
                        <xsl:when test="$prio='0.8'"><span class="priority p-08"><xsl:value-of select="$prio"/></span></xsl:when>
                        <xsl:when test="$prio='0.7'"><span class="priority p-07"><xsl:value-of select="$prio"/></span></xsl:when>
                        <xsl:when test="$prio='0.6'"><span class="priority p-06"><xsl:value-of select="$prio"/></span></xsl:when>
                        <xsl:otherwise><span class="priority p-05"><xsl:value-of select="$prio"/></span></xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="col-freq">
                      <xsl:choose>
                        <xsl:when test="$freq='weekly'">
                          <span class="freq freq-weekly"><span class="freq-dot"></span>Weekly</span>
                        </xsl:when>
                        <xsl:otherwise>
                          <span class="freq freq-monthly"><span class="freq-dot"></span>Monthly</span>
                        </xsl:otherwise>
                      </xsl:choose>
                    </td>
                    <td class="col-lastmod">
                      <span class="lastmod">
                        <xsl:value-of select="sm:lastmod"/>
                      </span>
                    </td>
                  </tr>
                </xsl:for-each>
              </tbody>
            </table>
          </div>
        </main>

        <footer>
          <a href="https://www.pixeladvant.com">pixeladvant.com</a>
          &#160;·&#160; Generated from
          <a href="/sitemap.xml">sitemap.xml</a>
        </footer>

      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
