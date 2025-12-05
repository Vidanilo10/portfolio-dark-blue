# Installation Instructions for Windows

## Issue: PowerShell Script Execution Disabled

If you see an error like "running scripts is disabled on this system", follow these steps:

### Option 1: Use Command Prompt (Recommended)

1. Open **Command Prompt** (cmd.exe) as Administrator
2. Navigate to your project folder:
   ```cmd
   cd c:\Users\Victor\projects\portfolio
   ```
3. Run the installation:
   ```cmd
   npm install
   ```

### Option 2: Enable PowerShell Scripts (One-time setup)

1. Open **PowerShell as Administrator**
2. Run this command:
   ```powershell
   Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
   ```
3. Type `Y` and press Enter
4. Now you can run npm commands in PowerShell

### Option 3: Use Git Bash (If installed)

If you have Git for Windows installed:
1. Open Git Bash
2. Navigate to project:
   ```bash
   cd /c/Users/Victor/projects/portfolio
   ```
3. Run:
   ```bash
   npm install
   ```

## Complete Installation Steps

### Step 1: Install Node.js (if not already installed)

Download and install from: https://nodejs.org/ (LTS version recommended)

### Step 2: Verify Installation

```cmd
node --version
npm --version
```

You should see version numbers (e.g., v20.x.x and 10.x.x)

### Step 3: Install Project Dependencies

**Using Command Prompt:**
```cmd
cd c:\Users\Victor\projects\portfolio
npm install
```

This will install all required packages:
- React
- Vite
- React Icons
- ESLint and other dev tools

### Step 4: Start Development Server

```cmd
npm run dev
```

Your portfolio will open at `http://localhost:5173`

### Step 5: Build for Production

```cmd
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

## Troubleshooting

### Error: "Cannot find module"
**Solution:** Delete `node_modules` folder and `package-lock.json`, then run `npm install` again

### Error: "Port 5173 already in use"
**Solution:** 
```cmd
npm run dev -- --port 3000
```

### Error: "EACCES permission denied"
**Solution:** Run Command Prompt as Administrator

### React Icons not showing
**Solution:** Make sure all dependencies installed correctly:
```cmd
npm install react-icons
```

## Alternative: Manual Setup with npx

If npm install continues to have issues, you can use npx:

```cmd
npx vite
```

This will prompt you to install vite temporarily and run it.

## Development Workflow

1. **Start dev server:** `npm run dev`
2. **Make changes** in `src/` files
3. **See live updates** in browser (hot reload enabled)
4. **Build for production:** `npm run build`
5. **Test production build:** `npm run preview`

## Next Steps

After successful installation:

1. ✅ Verify the site runs at `http://localhost:5173`
2. ✅ Update personal information (see QUICKSTART.md)
3. ✅ Place your CV PDF in the root folder
4. ✅ Test responsiveness
5. ✅ Build and deploy to AWS S3 (see AWS_DEPLOYMENT_GUIDE.md)

## Need More Help?

- Check the README.md for complete documentation
- Review QUICKSTART.md for customization tips
- See AWS_DEPLOYMENT_GUIDE.md for deployment instructions

Happy coding! 🚀
