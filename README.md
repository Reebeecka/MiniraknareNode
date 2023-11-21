# MiniraknareNode

<h2>Miniräknare</h2>

En enkel kalkylator som kan lägga till, subtrahera och multiplicera värden i uppsättningar av register. Kalkylatorn stöder också användning av register som värden med lat evaluering (utvärderas vid utskrift).

<h3>Användning</h3>
Programmet accepterar kommandon från terminalen. Nedan finns några exempel på giltiga kommandon:

A add 2
A add 3
print A
B add 5
B subtract 2
print B
A add 1
print A
quit
Detta exempel kommer att producera följande utmatning:

plaintext
Copy code
5
3
6

<h4>Kommandon</h4>
* <register> add <value>: Lägg till värdet i det angivna registret.
* <register> subtract <value>: Subtrahera värdet från det angivna registret.
* <register> multiply <value>: Multiplicera värdet med det angivna registret.
* print <register>: Skriv ut värdet i det angivna registret.
* quit: Avsluta miniräknarem.

<h3>Övrigt</h3>
Alla register är icke-känsliga för skiftläge (case-insensitive).
Ogiltiga kommandon loggas till konsolen men ignoreras i miniräknarens behandling.

<h2>Bygga och köra</h2>
För att köra programmet, använd följande kommando i terminalen:

node miniraknare.js
Filinmatning
Programmet stöder även inmatning från en fil. Ange filen som ett kommandoradsargument när du startar programmet. 

Exempel:
node miniraknare.js < file.txt

I filen input.txt placerar du de önskade kommandona rad för rad, och programmet kommer att exekvera dem.

<h3>Felhantering</h3>
Eventuella fel eller ogiltiga kommandon kommer att loggas till konsolen.

<h3>Språk och Teknik</h3>
Programmet är skrivet i Node.js och använder Readline för att hantera användarinmatning från terminalen.
