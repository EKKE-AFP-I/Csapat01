Fülep Viktor tesztelési jegyzőkönyv

Dátum: 2025.01.16
Projekt: AFP Beadandó
Cél: A rendszer funkcionalitásának ellenőrzése

1. Regisztráció tesztelése

Megnyitottam a regisztrációs oldalt, mezei felhasználó regisztrálásához kitöltöttem a mezőket de az adminként való regisztráláshoz használatos checbox nem volt bepipálva. A Sign in gombra kattintás után a regisztráció sikeresen megtörtént, a felhasználónév és jelszó eltárolódott, a felhasználó nem kapott admin jogot. 
A regisztrációs oldalon új felhasználót regisztráltam, a mezők kitöltése után bepipáltam az adminként való regisztráláshoz használatos checkbox-ot, az ezáltal megjelent mezőbe beírtam az admin kódot hibásan, a Sign in gomb megnyomása után  a regisztráció sikertelen lett, hibaüzenetet kaptam, hogy helytelen admin kóddal próbáltam regisztrálni. Az helyes admin kód beírása után a Sing in gomb megnyomásával a regisztráció sikeresen megtörtént, a felhasználónév és jelszó eltárolódott, a felhasználó admin jogot kapott.
Mindegyik az elvártnak megfelelően, helyesen működött.

2. Bejelentkezés tesztelése

Megnyitottam a bejelentkezés oldalt ahol felhasználónévhez nem létező felhasználónevet és jelszót írtam. A Sing in gomb megnyomása után a bejelentkezés sikertelen lett, hibaüzenetet kaptam, hogy helytelen felhasználónevet vagy jelszót használtam. Ezután létező felhasználó nevet de nem megfelelő jelszót adtam meg, amivel ismét hibaüzenetet kaptam a Sing in gombra kattintva, ugyanazzal a hibaüzenettel, mint az előbb.
Helyes és létező felhasználónévvel és hozzá tartozó jelszóval a Sing in gombra kattintva sikeresen be tudtam jelentkezni, amivel át lettem irányítva a játék kezdőoldalára.
Mindegyik az elvártnak megfelelően, helyesen működött.

3. Bejelentkezés nélküli lehetőségek tesztelése

A regisztrációs oldalon rákattintva a Login! linkre illetve a menü szalagon is rákattintva a login gombra kattintva át lettem irányítva a bejelentkezés oldalra. Szintén a regisztrációs oldalon rákattintva a menü szalagon a quiz gombra elindult a játék bejelentkezés nélkül is. A menü ikonra kattintva bejött a menü oldal a quiz és a regisztrációs lehetőségekkel, itt a register linkre kattintva át lettem irányítva a regisztrációs oldalra és a quiz-re kattintva elindult a bejelentkezés nélküli játék.
A bejelentkezés oldalon rákattintva a Sing up! linkre át lettem irányítva regisztrációs oldalra, a login gombra kattintva át lettem irányítva a bejelentkezés oldalra. Szintén a bejelentkezés oldalon rákattintva a menü szalagon a quiz gombra elindult a játék bejelentkezés nélkül is. A menü ikonra kattintva bejött a menü oldal a quiz és a regisztrációs lehetőségekkel, itt a register linkre kattintva át lettem irányítva a regisztrációs oldalra és a quiz-re kattintva elindult a bejelentkezés nélküli játék.
Mindegyik az elvártnak megfelelően, helyesen működött.

4. Bejelentkezés utáni lehetőségek tesztelése

Admin joggal rendelkező felhasználóval történt bejelentkezés után a játék kezdőlapján a menü szalagon lévő quiz gombra kattintva elindult a játék, a menü ikonra kattintva bejött a menü oldal a quiz és az admin lehetőségekkel. Itt a quiz linkre kattintva elindult a játék, az admin linkre kattintva át lettem irányítva az admin felületre. A menü szalagon lévő logout gombra kattintva sikeresen kijelentkeztem.
Admin joggal nem rendelkező felhasználóval történt bejelentkezés után a játék kezdőlapján a menü szalagon lévő quiz gombra kattintva elindult a játék, a menü ikonra kattintva bejött a menü oldal a quiz lehetőséggel, amire kattintva elindult a játék. A menü szalagon lévő logout gombra kattintva sikeresen kijelentkeztem és át lettem irányítva a bejelentkezés oldalra.
Mindegyik az elvártnak megfelelően, helyesen működött.

5. Admin felület tesztelése

Admin joggal rendelkező felhasználóval történt bejelentkezés után a menü ikonra kattintva bejött a menü oldal. Itt az admin linkre kattintva át lettem irányítva az admin felületre, ahol az adatbázisban tárolt összes kérdés és hozzá tartozó válasz kis kártyán megjelent.
A kártyákon lévő modify gombra át lettem irányítva az adatok módosítása oldalra, ahol az éppen módosított kérdés és a hozzá tartozó válaszok illetve a helyes válasz sorszáma sikeresen be lett írva a megfelelő mezőbe. Itt sikeresen tudtam módosítani a kérdést és/vagy kérdéshez tartozó választ vagy azt, hogy melyik válasz a helyes az adott kérdéshez, a mentés gombra kattintva a módosítást elmentette adatbázisban.
A plusz jelre kattintva át lettem irányítva az adatok szerkesztése oldalra, ahol minden mező üres volt. Az ide beírt kérdés, válasz lehetőségek és megadott helyes válasz sorszáma után a mentés gombra kattintva sikeresen elmentette adatbázisban, az admin oldalon ezután már látható volt az új kártya rajta az új értékek. Ha nem lett megadva vagy a kérdés vagy a mind a négy válaszlehetőség vagy az, hogy mi a helyes válasz sorszáma, akkor a mentés gombra nem volt aktív nem lehetett elmenteni az adatbázisba.
Mindegyik az elvártnak megfelelően, helyesen működött.

6. Játék funkcionalitásának tesztelése

Mind a bejelentkezési oldalon, mind a regisztrációs oldalon, mind bejelentkezés után a játék kezdőoldalán rákattintva a menü szalagon a quiz gombra a játék sikeresen elindult. Ezen felül bejelentkezés után a játék kezdőoldalán a play gombra kattintva is elindult a játék.
A játék során minden alkalommal megjelent a kérdés és a hozzá tartozó négy válaszlehetőség illetve a számláló a válaszlehetőségek alatt, mutatva, hogy éppen hányadik kérdésnél járunk és összesen hány kérdés lesz. A játék során ha a helyes egy darab válaszra kattintottam akkor a válasz gomb zöld színre váltott, ha helytelen válaszra kattintottam akkor a gomb piros színre váltott. A játék végén a számláló helyesen írta ki mindegyik esetben a helyes válaszokat és a játékban szerepelt kérdések össz darabszámát. Az itt lévő play again gombra kattintva vagy a menü szalagon lévő qiuz gombra kattintva új játék kezdődött. A menü ikonra kattintva bejött a menü oldal. A logout gombra kattintva sikeresen kijelentkeztem és át lettem irányítva a bejelentkezés oldalra.
Mindegyik az elvártnak megfelelően, helyesen működött.

7. Nem optimális lehetőségek tesztelése

7.1 Játék közbeni oldal frissítés tesztelése

Az oldal frissült, a játék újra kezdődött. A játék végén csak az az eredmény lett figyelembe véve, amelyik abban a végig játszásban szerepelt, ami közben nem történt frissítés.

7.2 Játék közben új játék indítása

Játék elindítása után a menü szalagon lévő quiz gombra kattintva is új játék indult illetve a menü ikonra kattintás által előhozott menü oldalon lévő quiz linkre kattintva is új játék indult. A játék végén csak az az eredmény lett figyelembe véve, amelyik abban a végig játszásban szerepelt, ami közben nem volt új játék indítva.

7.3 Játék közbeni más admin felületre átváltás

Admin joggal rendelkező felhasználóval indított játék közben a menü ikonra a menü ikonra kattintás által előhozott menü oldalon lévő admin linkre kattintva sikeresen át lettem irányítva az admin oldalra.

7.4 Játék közbeni kijelentkezés

A játék közben a menü szalagon lévő logout gombra kattintva sikeresen kijelentkeztem és át lettem irányítva a bejelentkezés oldalra.

Összegzés
Hibát nem találtam a jelenlegi elkészültségi szinten a funkciók megfelelően működnek.

