## Funkcionális specifikáció

# 1. Áttekintés, a rendszer célja
A projekt célja egy olyan webes alkalmazás kifejlesztése, amely lehetőséget nyújt a felhasználók számára, hogy játékos formában tanuljanak különböző témakörökben. Az alkalmazás fő mechanikája szerint Európa térképét lehet „elfoglalni” úgy, hogy a felhasználók kérdésekre helyesen válaszolnak. A rendszer több nehézségi szintet és felhasználói szinteket támogat, ezáltal alkalmazkodik a különböző tudásszintekhez és preferenciákhoz.

Célunk az, hogy a rendszer platformfüggetlen legyen, ezáltal hozzáférhető számítógépeken, tableteken és okostelefonokon keresztül is. Az alkalmazás ingyenesen elérhető, és regisztráció után a felhasználó teljes körű hozzáférést kap a funkciókhoz. Minden téma végén feladatokkal tesztelhetik tudásukat, az eredményeket pedig a rendszer menti a profiljukba.

# 2. Használati esetek


# 3. Megfeleltetés, hogyan fedik le a használati esetek a követelményeket


# 4. Képernyő tervek


# 5. Forgatókönyv


# 6. Funkció–követelmény megfeleltetés
ID|Verzió|Név|Kifejtés
--|------|---|--------
K01|V1.0|Bejelentkezési felület|A játékosok email címük és jelszavuk segítségével bejelentkezhetnek. Helytelen adatok esetén hibaüzenet jelenik meg.
K02|V1.0|Regisztráció|Új játékos regisztrációja felhasználónév, email cím és jelszó megadásával. Hiányos vagy nem megfelelő adatok esetén értesítés jelenik meg.
K03|V1.0|Jogosultsági szintek|- Admin: Felhasználók kezelése, játék statisztikák, és rendszermódosítások. - Játékos: Játék indítása, pontszámok megtekintése, toplista elérése.
K04|V1.0|Admin felület|Az adminisztrátor számára elérhető felület.
K05|V1.0|Kvíz|A játék többkérdéses kvízekből áll, ahol a felhasználó a helyes válaszok függvényében kap pontot.
K06|V1.0|Kvíz indítás|Bal felső sarokba az ikonba kattintva előhozható és indítható a játék.
K07|V1.0|Kvíz kérdés létrehozás|Admin felhasználóként az admin felületen új kérdés hozható létre.
K08|V1.0|Kvíz kérdés módosítása|Admin felhasználóként az admin felületen módosíthatóak a kérdések és válaszok.