@echo off
title Node.js Modules Installer

echo / ---------------------------------------------- /
echo         SelfBot created by Squatch
echo                 1 / 14 / 2018
echo / ---------------------------------------------- /
echo Installing Required Node Modules...
echo --------------------------------------

cmd /c "npm install discord.js"
echo.
cmd /c "npm install chalk"
echo.
cmd /c "npm install moment"
echo.
echo Done!
echo Creating run files for DDbot...
echo ------------------------------------
echo @echo off > run.bat
echo :: Created by Sasquatch  [ 1 / 14 / 2018 ] >> run.bat
echo title Squatch DDbot >> run.bat
echo :START >> run.bat
echo node DDBot.js >> run.bat
echo goto START >> run.bat
echo "run.bat" File Created.
echo ------------------------------------
echo Deleting unwanted files...
echo ------------------------------------
echo Closing...