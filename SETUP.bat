@echo off
REM Setup và khởi động DTC Viewer (Windows)

echo.
echo 🚀 DTC Documentation Viewer - Setup Guide
echo ==========================================
echo.

REM Check Node.js
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js không được cài đặt!
    echo.
    echo Vui lòng cài đặt Node.js từ: https://nodejs.org/
    pause
    exit /b 1
)

for /f "tokens=*" %%i in ('node -v') do set NODE_VERSION=%%i
for /f "tokens=*" %%i in ('npm -v') do set NPM_VERSION=%%i

echo ✅ Node.js: %NODE_VERSION%
echo ✅ npm: %NPM_VERSION%
echo.

echo 📦 Cài đặt dependencies...
call npm install --legacy-peer-deps

echo.
echo ✅ Setup hoàn tất!
echo.
echo 🎯 Để khởi động ứng dụng:
echo.
echo   npm run dev
echo.
echo Ứng dụng sẽ chạy trên:
echo   - Frontend: http://localhost:8080
echo   - API Server: http://localhost:3001
echo.
echo 📚 Để tìm hiểu thêm, xem: DTC_VIEWER_README.md
echo.
pause
