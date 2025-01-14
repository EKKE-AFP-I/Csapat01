## Funkcionális specifikáció

# 1. Áttekintés, a rendszer célja
A projekt célja egy olyan webes alkalmazás kifejlesztése, amely lehetőséget nyújt a felhasználók számára, hogy játékos formában tanuljanak különböző témakörökben. Az alkalmazás fő mechanikája szerint Európa térképét lehet „elfoglalni” úgy, hogy a felhasználók kérdésekre helyesen válaszolnak. A rendszer több nehézségi szintet és felhasználói szinteket támogat, ezáltal alkalmazkodik a különböző tudásszintekhez és preferenciákhoz.

Célunk az, hogy a rendszer platformfüggetlen legyen, ezáltal hozzáférhető számítógépeken, tableteken és okostelefonokon keresztül is. Az alkalmazás ingyenesen elérhető, és regisztráció után a felhasználó teljes körű hozzáférést kap a funkciókhoz. Minden téma végén feladatokkal tesztelhetik tudásukat, az eredményeket pedig a rendszer menti a profiljukba.

# 2. Használati esetek

>Felhasználók:
>> Vendég felhasználók:
>>* Regisztráció nélkül próbálják ki a játékot, de eredményeiket nem menti a rendszer.
>>* Regisztrált felhasználók:
>>* Személyre szabott profil, eredmények mentése, fejlődés nyomon követése.
>
>> Adminisztrátorok:
>> * Felügyelik a rendszer működését, kezelik a kérdéseket és témákat.

>Használati esetek:
>>1. Bejelentkezés:
>>* A felhasználók regisztrálhatnak vagy bejelentkezhetnek email-címük és jelszavuk segítségével.
>>* Az adminisztrátorok kezelhetik a kérdéseket (létrehozás, módosítás, törlés).
>
>>1. Játékmenet:
>>* A felhasználó egy véletlenszerű kérdéseket kap, majd kérdésekre válaszol.
>>* Helyes válasz esetén elfoglal egy országot a térképen és pontot kap.
>>* Nehézségi szintek biztosítva vannak a tanulás támogatására.
>
>>1. Eredmények kezelése:
>>* A regisztrált felhasználók egy nyilvános táblázaton nyomon követhetik a teljesítésüket. -feljesztés alatt-
>>* Az adminisztrátorok statisztikákat nézhetnek az aktív felhasználókról és új kérdéseket hozhatnak létre.


# 3. Megfeleltetés, hogyan fedik le a használati esetek a követelményeket
- K01, K02: Az alkalmazást úgy hozzuk létre, hogy tartalmazza a bejelentkezés és regisztráció funkciókat. Ezek lehetővé teszik, hogy a felhasználók email és jelszó megadásával belépjenek, vagy új fiókot hozzanak létre. Helytelen adatok esetén a rendszer hibaüzenetet jelenít meg.

- K03: Különböző jogosultsági szinteket biztosítunk: az adminisztrátorok teljes körű hozzáférést kapnak a rendszer funkcióihoz, míg a játékosok csak a saját profiljukhoz és játék funkciókhoz férnek hozzá.

- K04: Az adminisztrátorok számára kialakítunk egy dedikált felületet, ahol kezelhetik a felhasználókat, statisztikákat tekinthetnek meg, és módosíthatják a rendszer adatait.

- K05, K06: A játékosok számára többkérdéses kvízek állnak rendelkezésre, amelyeket a rendszer automatikusan értékel. A kvíz a bal felső sarokban lévő ikonból indítható el.

- K07, K08: Az adminisztrátorok új kérdéseket hozhatnak létre vagy meglévő kérdéseket módosíthatnak az admin felületen, ezzel biztosítva a tartalom folyamatos bővítését és karbantartását.

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