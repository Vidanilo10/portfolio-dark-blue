@echo off
echo =====================================
echo   Portfolio Deployment to AWS S3
echo =====================================
echo.

REM Check if bucket name is provided
if "%1"=="" (
    echo Usage: deploy.bat YOUR-BUCKET-NAME
    echo Example: deploy.bat victor-portfolio-website
    exit /b 1
)

set BUCKET_NAME=%1

echo Step 1: Building React application...
call npm run build
if errorlevel 1 (
    echo Build failed!
    exit /b 1
)
echo Build complete!
echo.

echo Step 2: Copying CV to dist folder...
if exist "victor_castaneda-4-1.pdf" (
    copy /Y "victor_castaneda-4-1.pdf" "dist\"
    echo CV copied successfully!
) else (
    echo Warning: CV file not found!
)
echo.

echo Step 3: Deploying to S3 bucket: %BUCKET_NAME%...
aws s3 sync dist\ s3://%BUCKET_NAME%/ --delete
if errorlevel 1 (
    echo Deployment failed! Check your AWS credentials and bucket name.
    exit /b 1
)
echo.

echo =====================================
echo   Deployment Complete!
echo =====================================
echo.
echo Your portfolio is now live at:
echo http://%BUCKET_NAME%.s3-website-us-east-1.amazonaws.com
echo.
echo Note: Replace 'us-east-1' with your actual AWS region if different
echo.
pause
