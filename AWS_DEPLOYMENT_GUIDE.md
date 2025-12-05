# AWS S3 Deployment Guide

This guide will walk you through deploying your React portfolio to AWS S3 for static website hosting.

## Prerequisites

- AWS Account
- AWS CLI installed and configured
- Node.js and npm installed

## Step 1: Install AWS CLI

If you haven't already, install the AWS CLI:

**Windows (using PowerShell as Administrator):**
```powershell
msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi
```

**Or download from:** https://aws.amazon.com/cli/

## Step 2: Configure AWS CLI

Configure your AWS credentials:

```bash
aws configure
```

You'll need to provide:
- AWS Access Key ID
- AWS Secret Access Key
- Default region (e.g., us-east-1)
- Default output format (json)

## Step 3: Create S3 Bucket

Choose a unique bucket name (e.g., `victor-portfolio-website`):

```bash
aws s3 mb s3://victor-portfolio-website
```

## Step 4: Enable Static Website Hosting

```bash
aws s3 website s3://victor-portfolio-website/ --index-document index.html --error-document index.html
```

## Step 5: Configure Bucket Policy for Public Access

Create a file named `bucket-policy.json`:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::victor-portfolio-website/*"
    }
  ]
}
```

Apply the bucket policy:

```bash
aws s3api put-bucket-policy --bucket victor-portfolio-website --policy file://bucket-policy.json
```

## Step 6: Disable Block Public Access (if needed)

```bash
aws s3api put-public-access-block --bucket victor-portfolio-website --public-access-block-configuration "BlockPublicAcls=false,IgnorePublicAcls=false,BlockPublicPolicy=false,RestrictPublicBuckets=false"
```

## Step 7: Build Your React Application

From your project directory:

```bash
npm install
npm run build
```

This creates a `dist` folder with your production-ready files.

## Step 8: Upload Files to S3

**Important:** Make sure to copy your CV PDF to the dist folder before uploading:

```bash
# Copy CV to dist folder
copy victor_castaneda-4-1.pdf dist\

# Upload all files to S3
aws s3 sync dist/ s3://victor-portfolio-website/ --delete
```

The `--delete` flag removes files from S3 that aren't in your local dist folder.

## Step 9: Access Your Website

Your website will be available at:
```
http://victor-portfolio-website.s3-website-[region].amazonaws.com
```

Replace `[region]` with your AWS region (e.g., `us-east-1`).

To get the exact URL:
```bash
aws s3api get-bucket-website --bucket victor-portfolio-website
```

## Optional: Set Up CloudFront (CDN)

For better performance and HTTPS support, consider setting up CloudFront:

### Step 1: Create CloudFront Distribution

```bash
aws cloudfront create-distribution --origin-domain-name victor-portfolio-website.s3-website-us-east-1.amazonaws.com
```

### Step 2: Configure Custom Domain (Optional)

1. Register a domain (e.g., via Route 53)
2. Create an SSL certificate in AWS Certificate Manager (ACM)
3. Update CloudFront distribution to use your custom domain
4. Update Route 53 to point to CloudFront distribution

## Optional: Set Up Custom Domain with Route 53

If you have a custom domain:

1. **Create hosted zone in Route 53:**
```bash
aws route53 create-hosted-zone --name yourdomain.com --caller-reference $(date +%s)
```

2. **Create A record pointing to S3 bucket or CloudFront distribution**

## Continuous Deployment Script

Create a deployment script `deploy.sh`:

```bash
#!/bin/bash

echo "Building application..."
npm run build

echo "Copying CV to dist folder..."
copy victor_castaneda-4-1.pdf dist\

echo "Deploying to S3..."
aws s3 sync dist/ s3://victor-portfolio-website/ --delete

echo "Invalidating CloudFront cache (if using CloudFront)..."
# aws cloudfront create-invalidation --distribution-id YOUR_DISTRIBUTION_ID --paths "/*"

echo "Deployment complete!"
echo "Your site is live at: http://victor-portfolio-website.s3-website-us-east-1.amazonaws.com"
```

Or for Windows, create `deploy.bat`:

```batch
@echo off
echo Building application...
call npm run build

echo Copying CV to dist folder...
copy victor_castaneda-4-1.pdf dist\

echo Deploying to S3...
aws s3 sync dist\ s3://victor-portfolio-website/ --delete

echo Deployment complete!
echo Your site is live at: http://victor-portfolio-website.s3-website-us-east-1.amazonaws.com
pause
```

## Cost Estimation

- **S3 Storage:** ~$0.023 per GB/month
- **S3 Requests:** Minimal for personal portfolio
- **Data Transfer:** First 100GB free per month
- **CloudFront (optional):** First 1TB free for 12 months, then ~$0.085 per GB

For a typical portfolio: **~$1-5/month**

## Security Best Practices

1. **Enable versioning:**
```bash
aws s3api put-bucket-versioning --bucket victor-portfolio-website --versioning-configuration Status=Enabled
```

2. **Enable server access logging:**
```bash
aws s3api put-bucket-logging --bucket victor-portfolio-website --bucket-logging-status file://logging.json
```

3. **Use CloudFront with AWS WAF** for DDoS protection

4. **Implement CSP headers** via CloudFront functions

## Troubleshooting

### Issue: 403 Forbidden Error
- Check bucket policy is correctly applied
- Verify Block Public Access is disabled
- Ensure index.html exists in root

### Issue: CSS/JS not loading
- Check that files were uploaded correctly
- Verify MIME types are correct
- Clear browser cache

### Issue: Routing issues with React Router
- Make sure error document is set to index.html
- Consider using CloudFront with proper redirects

## Monitoring

Set up CloudWatch alarms for:
- S3 bucket size
- Request metrics
- 4xx/5xx error rates

```bash
aws cloudwatch put-metric-alarm --alarm-name s3-4xx-errors --alarm-description "Alert on 4xx errors" --metric-name 4xxErrors --namespace AWS/S3 --statistic Sum --period 300 --threshold 10 --comparison-operator GreaterThanThreshold
```

## Cleanup (if needed)

To delete everything:

```bash
# Empty and delete S3 bucket
aws s3 rm s3://victor-portfolio-website --recursive
aws s3 rb s3://victor-portfolio-website

# Delete CloudFront distribution (if created)
# aws cloudfront delete-distribution --id YOUR_DISTRIBUTION_ID
```

## Additional Resources

- [AWS S3 Static Website Hosting Documentation](https://docs.aws.amazon.com/AmazonS3/latest/userguide/WebsiteHosting.html)
- [CloudFront Documentation](https://docs.aws.amazon.com/cloudfront/)
- [Route 53 Documentation](https://docs.aws.amazon.com/route53/)
