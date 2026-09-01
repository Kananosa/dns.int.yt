# Intent-DNS

> Developer-focused authoritative DNS hosting powered by PowerDNS, with
> apex ALIAS flattening, a REST API, generous DNS record limits, and a
> modern web control panel.

## 🌐 Website & Control Panel

-   **Website:** https://dns.int.yt/
-   **Control Panel:** https://panel.dns.int.yt/
-   **API:** `/api/v1/`
-   **Email:** admin@int.yt
-   **Discord:** https://discord.gg/NCS96PS4MH

## ✨ Features

-   Authoritative DNS hosting
-   PowerDNS Authoritative + PowerDNS Recursor
-   Apex/root-domain `ALIAS` support and DNS flattening
-   REST API v1 with Bearer-token authentication
-   Modern responsive control panel
-   DNS discovery and import
-   A, AAAA, CNAME, ALIAS, MX, TXT, NS, SRV and CAA records
-   Domain and DNS-record quotas
-   User, staff and administrator roles
-   API key management
-   CSRF protection and secure password hashing
-   Audit logging and administrative controls

## 💰 Plans

  Plan              Domain Slots   Records / Domain     Price
  --------------- -------------- ------------------ ---------
  **Free**                    20              1,000   **\$0**
  **Paid**                   100              1,000   **\$1**
  **Unlimited**        Unlimited          Unlimited   **\$4**

For paid plans, contact **admin@int.yt** or join **Discord** for faster
replies: https://discord.gg/NCS96PS4MH

## 🧠 DNS Architecture

``` text
Internet
   │
   ▼
Intent-DNS Authoritative DNS
   │
   ├── dns1.int.yt
   └── dns2.int.yt
   │
   ▼
PowerDNS Authoritative
   │
   ▼
PowerDNS Recursor
   │
   └── ALIAS / apex flattening
```

When a domain is hosted on Intent-DNS, delegate it to:

``` text
dns1.int.yt
dns2.int.yt
```

## 🔗 Apex ALIAS

Intent-DNS supports an `ALIAS` record at the root (`@`) of a zone.

Example:

``` text
@    ALIAS    service.example.com.
```

This is useful when a hosting provider gives you a hostname but you need
the root domain to point to that service.

The backend validates ALIAS conflicts, including conflicts with A, AAAA
and CNAME records at the same owner name, duplicate ALIAS targets, and
self-referential targets.

ALIAS can coexist with appropriate records such as NS, SOA, MX, TXT, SRV
and CAA.

## 📋 Supported DNS Records

``` text
A
AAAA
CNAME
ALIAS
MX
TXT
NS
SRV
CAA
```

## 🔍 DNS Discovery & Import

The control panel supports:

``` text
Enter domain
    ↓
Run DNS discovery
    ↓
Review discovered records
    ↓
Select records
    ↓
Create domain
    ↓
Persist selected records
    ↓
Synchronize with PowerDNS
```

The import system supports A, AAAA, CNAME, ALIAS, MX, TXT, NS, SRV and
CAA records where applicable.

## 🔌 REST API v1

Base path:

``` text
/api/v1/
```

Authentication uses Bearer tokens. Account passwords are not used as API
credentials.

### Authentication

``` http
POST /api/v1/auth/token
```

### User

``` http
GET /api/v1/user
```

### Domains

``` http
GET    /api/v1/domains
POST   /api/v1/domains
GET    /api/v1/domains/{id}
DELETE /api/v1/domains/{id}
```

### DNS Records

``` http
GET    /api/v1/domains/{id}/records
POST   /api/v1/domains/{id}/records
PUT    /api/v1/domains/{id}/records/{record_id}
DELETE /api/v1/domains/{id}/records/{record_id}
```

Example:

``` bash
curl https://dns.int.yt/api/v1/domains   -H "Authorization: Bearer idns_live_YOUR_TOKEN"
```

Interactive API documentation is available through the Intent-DNS
project.

## 🔐 Authentication & Authorization

Intent-DNS separates three account roles:

### User

Normal customers can manage their own account, domains and DNS records
within their limits.

### Staff

Staff can manage normal customer resources according to their
permissions.

Staff cannot:

-   Access administrator-only functions
-   Create or modify administrator accounts
-   Grant paid or unlimited privileges
-   Change administrator-controlled quotas

### Administrator

The production system reserves administrator privileges for the
permanent administrator accounts:

``` text
sreep
ziyaad
```

Administrators can manage users, staff, domains, records, plans, quotas,
API access, announcements and administrative controls.

Normal signup cannot create an administrator account.

## 📊 Quotas & Authorization

The plan system separates account roles from plan capabilities:

``` text
free
paid
unlimited
```

Resource controls include domain limits, per-domain record limits and
API availability.

Only administrators can grant or revoke unlimited access.

The authorization model is designed so future billing/payment
integration can be added without replacing the role and permission
system.

## 🖥️ Control Panel

The panel includes:

-   Dashboard
-   Domain management
-   DNS record management
-   DNS discovery/import
-   Profile and password management
-   API key management
-   API documentation
-   Staff portal
-   Administrator portal
-   Announcements
-   Audit information
-   Quota and plan information
-   Responsive/mobile navigation
-   Loading, validation, success and error states

## 🧪 Production Verification

The current production implementation has been tested for:

-   User signup/login/logout
-   Password and session handling
-   CSRF protection
-   Permanent administrator restrictions
-   Staff lifecycle
-   User/staff/admin authorization boundaries
-   API token generation and authenticated API requests
-   Domain CRUD
-   DNS record CRUD
-   ALIAS apex resolution
-   PowerDNS synchronization
-   DNS discovery and selected-record import
-   Database persistence
-   DNS resolution through authoritative nameservers
-   Nginx, PHP-FPM, MariaDB and PowerDNS service health

## 🏗️ Technology Stack

-   PHP
-   MariaDB
-   PowerDNS Authoritative
-   PowerDNS Recursor
-   Nginx
-   PHP-FPM
-   JavaScript
-   CSS
-   REST API
-   CoreUI-style frontend

## 🚀 Getting Started

1.  Create an account at https://panel.dns.int.yt/
2.  Add your domain.
3.  Delegate the domain to `dns1.int.yt` and `dns2.int.yt`.
4.  Add or import DNS records.
5.  Verify with:

``` bash
dig example.com
dig @dns1.int.yt example.com
dig @dns2.int.yt example.com
```

## 🛡️ Responsible Use

Intent-DNS is intended for legitimate DNS hosting and infrastructure
use. Users are responsible for the domains and records they operate
through the service. Abuse, malicious activity, spam, phishing, or other
prohibited activity may result in restrictions or account termination.

## ⭐ Support

If you find Intent-DNS useful:

-   Star the repository
-   Report bugs
-   Suggest improvements
-   Contribute fixes and features
-   Share the project with other developers

## 📬 Contact

-   Website: https://dns.int.yt/
-   Panel: https://panel.dns.int.yt/
-   Email: admin@int.yt
-   Discord: https://discord.gg/NCS96PS4MH

## 📄 License

Add the project's chosen license here (for example MIT, Apache-2.0, or
GPL-3.0) once the licensing decision has been made.
