<div align="center">

# ⚡ Intent-DNS

### Developer-first authoritative DNS hosting.

**Fast DNS management · Apex ALIAS · REST API · Generous limits · No unnecessary complexity**

[![Website](https://img.shields.io/badge/🌐_Website-dns.int.yt-111827?style=for-the-badge)](https://dns.int.yt/)
[![Control Panel](https://img.shields.io/badge/⚙️_Control_Panel-panel.dns.int.yt-4f46e5?style=for-the-badge)](https://panel.dns.int.yt/)
[![Discord](https://img.shields.io/badge/💬_Discord-Join-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/NCS96PS4MH)

</div>

---

<div align="center">

> **DNS infrastructure without the usual artificial limits.**
>
> Host your zones, manage records from a clean control panel, automate everything through the API, and use apex ALIAS records when your provider gives you a hostname instead of an IP.

</div>

---

## ✨ Why Intent-DNS?

Most DNS hosting platforms are designed around simple record editing. Intent-DNS is designed with **developers and infrastructure workflows** in mind.

| | Intent-DNS |
|---|---|
| 🌐 Authoritative DNS | **PowerDNS-based** |
| ⚡ Apex ALIAS | **Yes** |
| 🔌 REST API | **API v1** |
| 📦 Free plan | **20 domains × 1,000 records/domain** |
| 💳 Paid plan | **100 domains × 1,000 records/domain — $1** |
| ♾️ Unlimited plan | **Unlimited domains × unlimited records — $4** |
| 🔍 DNS discovery | **Built in** |
| 🔑 API authentication | **Bearer tokens** |
| 🖥️ Web panel | **Included** |

---

# 🚀 Get Started

### 1. Create your account

Open the Intent-DNS control panel:

**https://panel.dns.int.yt/**

Create an account and start with the Free plan.

### 2. Add your domain

From the dashboard, add a domain and configure its DNS records.

You can either create records manually or use **DNS discovery/import** to find existing records.

### 3. Delegate your domain

Set your domain's authoritative nameservers to:

```text
dns1.int.yt
dns2.int.yt
```

> Always use the exact nameservers shown by the Intent-DNS panel if your account displays different values.

### 4. Verify DNS

```bash
dig example.com
dig @dns1.int.yt example.com
dig @dns2.int.yt example.com
```

---

# 💰 Plans

Choose the amount of DNS infrastructure you actually need.

<table>
<tr>
<td width="33%" valign="top">

### 🆓 Free

## $0

**20 domains**

**1,000 records / domain**

- Authoritative DNS
- Web control panel
- DNS management
- API access according to account settings
- No payment card required

**[Start for free →](https://panel.dns.int.yt/)**

</td>
<td width="33%" valign="top">

### 💎 Paid

## $1

**100 domains**

**1,000 records / domain**

- Everything needed for larger projects
- More domain slots
- Authoritative DNS
- Web control panel
- API access according to account settings

**Contact us →** admin@int.yt

</td>
<td width="33%" valign="top">

### ♾️ Unlimited

## $4

**Unlimited domains**

**Unlimited records**

- Designed for large DNS workloads
- No domain-slot limit
- No record limit
- Authoritative DNS
- Web control panel
- API access according to account settings

**Contact us →** admin@int.yt

</td>
</tr>
</table>

### 💬 Purchase & Support

**Email:** admin@int.yt

**Discord:** https://discord.gg/NCS96PS4MH

Discord is recommended for faster replies.

---

# 🔗 Apex ALIAS

One of the core Intent-DNS features is **apex/root-domain ALIAS support**.

Normally, DNS does not allow a standard CNAME at the zone apex:

```text
example.com → CNAME → service.example.com
```

Intent-DNS supports:

```text
@ → ALIAS → service.example.com.
```

This is particularly useful when a hosting platform gives you a hostname such as:

```text
your-project.provider.example
```

but you want:

```text
example.com
```

to point to it.

### Example

```text
example.com
     │
     ▼
@  ALIAS  your-project.onrender.com.
     │
     ▼
Intent-DNS resolves the target
     │
     ▼
Address response returned to the client
```

### ALIAS validation

Intent-DNS protects zones from invalid ALIAS combinations, including:

- ❌ ALIAS + A at the same owner name
- ❌ ALIAS + AAAA at the same owner name
- ❌ ALIAS + CNAME at the same owner name
- ❌ Multiple ALIAS targets at the same owner name
- ❌ Self-referential ALIAS targets

Appropriate records such as **NS, SOA, MX, TXT, SRV and CAA** can coexist where valid.

---

# 📋 Supported DNS Records

```text
┌─────────┬──────────────────────────────────────┐
│ Type    │ Purpose                              │
├─────────┼──────────────────────────────────────┤
│ A       │ IPv4 address                         │
│ AAAA    │ IPv6 address                         │
│ CNAME   │ Canonical hostname                   │
│ ALIAS   │ Apex hostname / DNS flattening       │
│ MX      │ Mail exchange                        │
│ TXT     │ Text / verification / policy data    │
│ NS      │ Nameserver delegation                │
│ SRV     │ Service discovery                    │
│ CAA     │ Certificate authority policy         │
└─────────┴──────────────────────────────────────┘
```

### Quick examples

```dns
@       A       203.0.113.10
www     A       203.0.113.10

@       ALIAS   service.example.com.

@       MX      10 mail.example.com.
@       TXT     "v=spf1 ..."

_service._tcp    SRV    10 5 443 service.example.com.

@       CAA     0 issue "letsencrypt.org"
```

---

# 🔌 REST API

Automate your DNS infrastructure instead of clicking through a dashboard.

Base API:

```text
https://dns.int.yt/api/v1/
```

Authentication uses **Bearer API tokens**.

```http
Authorization: Bearer idns_live_YOUR_TOKEN
```

## Authentication

```http
POST /api/v1/auth/token
```

## Account

```http
GET /api/v1/user
```

## Domains

```http
GET    /api/v1/domains
POST   /api/v1/domains
GET    /api/v1/domains/{id}
DELETE /api/v1/domains/{id}
```

## Records

```http
GET    /api/v1/domains/{id}/records
POST   /api/v1/domains/{id}/records
PUT    /api/v1/domains/{id}/records/{record_id}
DELETE /api/v1/domains/{id}/records/{record_id}
```

### Example

```bash
curl https://dns.int.yt/api/v1/domains \
  -H "Authorization: Bearer idns_live_YOUR_TOKEN"
```

Create a record:

```bash
curl -X POST \
  https://dns.int.yt/api/v1/domains/DOMAIN_ID/records \
  -H "Authorization: Bearer idns_live_YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "www",
    "type": "A",
    "content": "203.0.113.10"
  }'
```

> Check the project's API documentation for the exact request and response schemas.

---

# 🔍 DNS Discovery & Import

Already have DNS records somewhere else?

Intent-DNS can discover existing records before creating a zone.

```text
┌───────────────────┐
│ Enter domain      │
└─────────┬─────────┘
          ▼
┌───────────────────┐
│ DNS discovery     │
└─────────┬─────────┘
          ▼
┌───────────────────┐
│ Review records    │
└─────────┬─────────┘
          ▼
┌───────────────────┐
│ Select records    │
└─────────┬─────────┘
          ▼
┌───────────────────┐
│ Create zone       │
└─────────┬─────────┘
          ▼
┌───────────────────┐
│ Sync to PowerDNS  │
└───────────────────┘
```

This makes migration from an existing DNS provider significantly easier.

---

# 🧠 Architecture

Intent-DNS uses a PowerDNS-based authoritative DNS architecture.

```text
                         INTERNET
                            │
                 DNS queries / delegation
                            │
                            ▼
                 ┌─────────────────────┐
                 │     Intent-DNS      │
                 │  Authoritative DNS  │
                 └──────────┬──────────┘
                            │
                ┌───────────┴───────────┐
                ▼                       ▼
        ┌───────────────┐       ┌───────────────┐
        │ dns1.int.yt   │       │ dns2.int.yt   │
        └───────┬───────┘       └───────┬───────┘
                │                       │
                └───────────┬───────────┘
                            ▼
                 ┌─────────────────────┐
                 │ PowerDNS Authoritative│
                 └──────────┬──────────┘
                            │
                            ▼
                 ┌─────────────────────┐
                 │  PowerDNS Recursor  │
                 │ ALIAS / flattening  │
                 └─────────────────────┘
```

### Main infrastructure

```text
Nginx
   │
   ├── PHP-FPM
   │      └── Intent-DNS application
   │
   └── HTTPS / web routing

MariaDB
   └── Users, domains, records, plans, audit data

PowerDNS Authoritative
   └── Authoritative DNS zones

PowerDNS Recursor
   └── Recursive resolution used by ALIAS handling
```

---

# 🔐 Security & Authorization

Intent-DNS separates normal users, staff, and administrators.

### 👤 User

Users can manage:

- Their own account
- Their permitted domains
- DNS records within their quotas
- API keys where enabled

### 🛠️ Staff

Staff can manage normal customer resources according to their permissions.

Staff cannot:

- Access administrator-only functions
- Create or modify administrator accounts
- Grant paid/unlimited privileges
- Change administrator-controlled quotas

### 👑 Administrator

Production administrator privileges are reserved for the designated administrator accounts.

Administrators can manage:

- Users
- Staff
- Domains
- DNS records
- Plans
- Quotas
- API access
- Announcements
- Administrative settings
- Audit information

Normal signup cannot create an administrator account.

---

# 📊 Quotas

The plan system separates **roles** from **plan capabilities**.

```text
Account role
     │
     ├── User
     ├── Staff
     └── Administrator

Plan
     │
     ├── Free
     ├── Paid
     └── Unlimited
```

Resource controls include:

```text
max_domains
max_records_per_domain
api_enabled
```

This structure allows future billing/payment integrations without replacing the authorization model.

---

# 🖥️ Control Panel

The Intent-DNS panel provides a complete web interface for DNS management.

### Included

- 📊 Dashboard
- 🌐 Domain management
- 🧾 DNS record management
- 🔍 DNS discovery/import
- 👤 Profile management
- 🔐 Password management
- 🔑 API key management
- 📚 API documentation
- 🛠️ Staff portal
- 👑 Administrator portal
- 📢 Announcements
- 📝 Audit information
- 📈 Quota/plan information
- 📱 Responsive navigation
- ⚠️ Validation and error feedback
- ✅ Success notifications
- ⏳ Loading states

---

# 🧪 Production Verification

The production implementation includes testing around:

### Authentication

- User signup/login/logout
- Password and session handling
- CSRF protection
- Administrator restrictions
- Staff lifecycle
- User/staff/admin authorization boundaries

### API

- API token generation
- Authenticated API requests
- Domain CRUD
- DNS record CRUD

### DNS

- A
- AAAA
- CNAME
- ALIAS
- MX
- TXT
- SRV
- CAA
- Apex ALIAS resolution
- PowerDNS synchronization
- Authoritative DNS resolution

### Discovery/import

- DNS discovery
- Discovery token handling
- Record selection
- Zone creation
- Database persistence
- PowerDNS synchronization
- Real DNS resolution

### Infrastructure

```text
Nginx
PHP-FPM
MariaDB
PowerDNS Authoritative
PowerDNS Recursor
```

---

# 🛠️ Technology Stack

<div align="center">

| Layer | Technology |
|---|---|
| Backend | **PHP** |
| Database | **MariaDB** |
| Authoritative DNS | **PowerDNS Authoritative** |
| Resolver | **PowerDNS Recursor** |
| Web server | **Nginx** |
| Runtime | **PHP-FPM** |
| API | **REST API v1** |
| Frontend | **JavaScript / CSS** |
| UI | **CoreUI-style interface** |

</div>

---

# 📡 DNS Troubleshooting

Check your authoritative nameservers:

```bash
dig NS example.com
```

Query a specific Intent-DNS nameserver:

```bash
dig @dns1.int.yt example.com
```

```bash
dig @dns2.int.yt example.com
```

Check an individual record:

```bash
dig A example.com
dig AAAA example.com
dig MX example.com
dig TXT example.com
```

For ALIAS:

```bash
dig example.com
```

If a nameserver change was made recently, remember that delegation and cached DNS responses can take time to update.

---

# 🤝 Contributing

Contributions, bug reports, feature ideas, and infrastructure improvements are welcome.

### Before opening an issue

Please include:

- What you expected
- What actually happened
- Relevant DNS output
- Relevant API response
- Steps to reproduce
- Environment information where useful

Never include:

- Passwords
- API tokens
- Private keys
- Session cookies
- Other credentials

---

# 🛡️ Responsible Use

Intent-DNS is intended for legitimate DNS hosting and infrastructure use.

Users are responsible for the domains and records they operate through the service.

Abuse, malicious activity, spam, phishing, or other prohibited activity may result in restrictions or account termination.

---

# 📬 Contact

| | |
|---|---|
| 🌐 Website | https://dns.int.yt/ |
| ⚙️ Control Panel | https://panel.dns.int.yt/ |
| 📧 Email | **admin@int.yt** |
| 💬 Discord | https://discord.gg/NCS96PS4MH |

**Discord is recommended for faster replies.**

---

<div align="center">

## ⭐ Like Intent-DNS?

**Star the repository and help more developers discover it.**

[🌐 Visit Website](https://dns.int.yt/) ·
[⚙️ Open Control Panel](https://panel.dns.int.yt/) ·
[💬 Join Discord](https://discord.gg/NCS96PS4MH)

<br>

**Intent-DNS — DNS infrastructure built for developers.**

</div>

---

## 📄 License

Add the project's chosen open-source license here once the licensing decision has been made (for example, MIT, Apache-2.0, or GPL-3.0).

