@echo off
echo Subiendo cambios a GitHub...
git add .
git commit -m "Enterprise Grade Audit: SEO, Vercel SPA routing, Supabase security and Mobile UX"
git push
echo.
echo ¡Cambios subidos exitosamente! Vercel comenzará el despliegue automático.
pause
