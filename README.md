Project build & Hostinger deploy

Build and package the site for Hostinger (creates `public_html` content and a zip):

1. Install dependencies:

```
npm install
```

2. Build and package for Hostinger (npm):

```
npm run package:hostinger
```

Or using the helper script:

```
bash scripts/package-for-hostinger.sh
```

After running, upload the generated `hostinger_deploy_YYYYMMDD.zip` contents to your Hostinger account (replace the existing `public_html`).
