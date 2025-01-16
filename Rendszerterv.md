1. A rendszer célja

A projekt célja egy olyan webes alkalmazás kifejlesztése, amely lehetőséget nyújt a felhasználók számára, hogy játékos formában tanuljanak különböző témakörökben. Az alkalmazás fő mechanikája szerint Európa térképét lehet „elfoglalni” úgy, hogy a felhasználók kérdésekre helyesen válaszolnak. A rendszer több nehézségi szintet és felhasználói szinteket támogat, ezáltal alkalmazkodik a különböző tudásszintekhez és preferenciákhoz.

Célunk az, hogy a rendszer platformfüggetlen legyen, ezáltal hozzáférhető számítógépeken, tableteken és okostelefonokon keresztül is. Az alkalmazás ingyenesen elérhető, és regisztráció után a felhasználó teljes körű hozzáférést kap a funkciókhoz. Minden téma végén feladatokkal tesztelhetik tudásukat, az eredményeket pedig a rendszer menti a profiljukba.

2. Projektterv

Szerepkörök:
Front-end munkálatok: Kovács Levente, Hajdú Attila, Fülep Viktor
Back-end munkálatok: Fülep Viktor, Hajdú Attila, Kovács Levente
Dokumentáció készítése: Hajdú Attila, Fülep Viktor, Kovács Levente

Ütemterv
Funkció  |  Feladat  |  Prioritás  |  Állapot
Követelmény specifikáció  | Dokumentálás |  5  | 100
Funkcionalitás specifikáció  | Dokumentálás  | 5  | 100
Rendszerterv  | Dokumentálás  | 5  | 100
Adattárolás  | Adatmodell megtervezése  |  1  | 100
Adattárolás  |  Adatbázis megvalósítása szerveren  | 1  | 100
Back-end  | Adatbázisokból adatok lekérdezése  | 1  | 100
Back-end  | Adatbázisokba adatok beszúrása  |  1  | 100
Back-end  | Adatbázisokban adatok módosítása  |  2  | 100
Back-end  | Adatbázisokból adatok törlése  |  3  | 100
Front-end  | Regisztrációs felület elkészítése  |  1  | 100
Front-end  | Login felület elkészítése  |  1  | 100
Front-end  | Admin felület elkészítése  |  1  | 100
Front-end  | Adatok szerkesztése felület elkészítése  |  1  | 100
Front-end  | Kvíz felület elkészítése  |  1  | 100
Front-end  | Eredmény felület elkészítése  |  1  | 100

3. Üzleti folyamatok modellje

Ide jöhet az a buzi kép amit csináltam, a karikás geci

4. Követelmények

Ide jöhet táblázatosan a követemény speci 7-es pontja, csak mondjuk nem kell az első 2 oszlop

5. Funkcionális terv

Ide jöhet a funkcionális speci 2. pontja

6. Fizikai környezet

A játék elsősorban web platformra készült, asztali gépre tabletre és mobilra egyszerre. Reszponzív, mobile first szemléletmóddal fejlesztve. Single page web app.  Az app standalone komponensekből épül fel, nincsenek megvásárolt komponenseink, nyílt forráskódú project.
Fejlesztői eszközök:
- XAMPP Control Panel
- phpmyadmin
- Visual Studio Code
Felhasznált csomagok:
- bootstrap5
- angular material
- fontawesome6
Felhasznált technológiák
- angular 18
- typescript
- html5
- scss (sass)

7. Architektúrális terv

Back-end: 
A rendszerhez szükség van egy adatbázis szerverre, ebben az esetben MySql-t használunk. A kliens oldali programokat egy php alapú REST api szolgálja ki, ez csatlakozik az adatbázis szerverhez. A kliensekkel JSON objektumokkal kommunikál. 
Front-end: 
A web alkalmazás Angular JS keretrendszer használatával készül el.

8. Adatbázis terv

Ide jöhet a másik kép amit csináltam

9. Implementációs terv

Back-end
Az adatbázishoz való kapcsolódás, a táblákból történő lekérdezések, a táblákba történő tárolások és a táblákban történő módosításokat és történő törléseket megvalósító metódusokat php nyelven fogjuk írni. Ezeket a műveleteket amennyire csak lehet külön fájlokba írva készítjük és így fogjuk egymáshoz csatolni a jobb átláthatóság, könnyebb változtathatóság és könnyebb bővítés érdekében.
Front-end
A webes felület főként HTML, CSS, Javascript és Angular nyelven fog készülni. Reszponzív, mobile first szemléletmóddal lesz fejlesztve. Single page web app fog készülni. Az app standalone komponensekből épül majd fel, nem lesznek megvásárolt komponenseink, nyílt forráskódú project lesz.

Ide is jöhetne még pár magvas gondolat akár.

10. Teszt terv

Funkcionális teszt fog készülni mindhárom fejlesztő részéről A teszt célja a rendszer és a komponensei funkcionalitásának teljes vizsgálata, ellenőrzése, a rendszer által megvalósított üzleti szolgáltatások verifikálása.

Tesztelendő funkciók
Back-end service:
Képesnek kell lennie csatlakozni a webes klienshez. Képesnek kell lennie egy időben kiszolgálni több klienst is. Fel kell tudnia tölteni, és le kell tudnia kérdezni az adatbázis adatait. Képesnek kell lennie már meglévő adat módosítására. Képesnek kell lennie már meglévő adat törlésére. Képesnek kell lennie minden felületen elérhető funkciók biztosítására. 

Login felület:
Képesnek kell lennie adatbázisban lévő egyezőség alapján beengedni - átírányítani - felhasználókat a kezdőoldalra.

Regisztrációs felület:
Ezen felületen a megfelelő adatok megadása mellett a megerősítés gombra kattintva a felhasználó 
regisztrációjának a funkcionális specifikációban leírtak szerint végbe kell mennie, majd elérhetővé kell tenni a bejelentkezést a felhasználó számára. Hibás regisztrációs adatok megadásakor hibaüzenetet kell kapjon a 
felhasználó.

Admin felület:
Admin jogosultsággal bejelentkezett felhasználónak el kell tudnia érnie ezt a felületet, látnia kell az adatbázisban tárolt adatokat kártyákon.

Adatok szerkesztése felület:
Admin jogosultsággal bejelentkezett felhasználónak el kell tudnia érnie ezt a felületet, ahol képesnek kell lennie az adatokat módosítani, törölni vagy újakat létrehozni. Ezeket a módosításokat le kell követni adatbázis szinten is.

Játék felület:
Nem regisztrált felhasználónak is el kell tudnia érnie login és regisztrációs felületen illetve regisztrált és bejelentkezett felhasználónak is el kell tudnia érnie ezt a felületet. Képesnek kell lennie a játékot végig játszania, egymás után kiválasztani a szerinte helyes válaszokat annyi kérdésen keresztül, amennyi előre be lett állítva.

