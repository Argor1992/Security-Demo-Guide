const quiz = [
    {
        q:'Welche der folgenden Aussagen sind zu Media Dropping richtig? ',
        options:[
            'USB Sticks können Schadsoftware enthalten.',
            'USB Sticks können immer ohne Bedenken in einen Rechner gesteckt werden, da sie in jedem Fall von ' +
            'einem Antivirus Scanner auf Schadsoftware überprüft werden. ',
            'Word Makros sind Programme die beim Start eines Word Dokuments automatisch ausgeführt werden müssen.',
            'Einstecken eines USB Sticks sind mögliche Schadsoftware Dateien sofort erkenntlich ' +
            'und der Stick kann im Notfall ausgeworfen werden. ',
            'Makros beinhalten  hilfreiche Funktionen und sollten daher immer aktiviert werden. '],
        answer: 0
    },

    {
        q:'Welche der folgenden Aussagen sind zu Media Dropping richtig? ',
        options:[
            'Hinter QR Codes können sich keine schadhafte Inhalte verbergen.',
            'Der Inhalt eines QR Codes wird von einem Smartphone auf Schadsoftware überprüft.',
            'Die Social Engineering Methode Media Dropping setzt auf die Interaktion und Neugier von Personen.',
            'QR Codes dienen alleine der Covid-19 Kontaktnachverfolgung. ',
            'Einen unbeschrifteten QR Code zu scannen sollte möglichst vermieden werden.'],
        answer:2
    },

    {
        q:'Welche der folgenden Aussagen sind zu Malware falsch? ',
        options:[
            'Nur Dateien vertrauen, die aus vertrauten Quellen stammen.',
            'Malware Infektionen beschränken sich nicht auf ein Gerät und können sich verbreiten.',
            'Um Malware zu erkennen, sollte man stets ein aktuelles Antivirenprogrammen benutzen.',
            'Betriebssysteme und Programme sollten immer auf den neusten Stand sein.',
            'Malware kann nur auf einem PC ausgeführt werden und nicht auf einem Handy.'],
        answer:4

    },

    {
        q:'Markiere alle Namen, die NICHT auf Schadprogramme verweisen.',
        options:[
            'Trojaner/Trojanisches Pferd',
            'Crapware ',
            'Spyware',
            'Ransomware',
            'Bloatware'],
        answer:1
    },

    {
        q:'Welchem Bestreben gehen die Support-Scammer nach?',
        options:[
            'Sicherheitssoftware zu installieren',
            'Bewusstseinsschulung',
            'Antivirensoftware installieren, da sie ernsthaftes Interesse daran haben, Ahnungslosen zu helfen.',
            'Sie haben keine Freunde und wollen sich nur unterhalten',
            'Software des Opfers benutzen, da sie selbst kein Geld haben'],
        answer:2
    },

    {
        q:'Welche Tricks werden für Support-Scam verwendet?',
        options:[
            'Der Betrüger könnte vor den Augen des Opfers das standardmäßig unter Windows installierte Programm ' +
            'Event Viewer öffnen.',
            'Der Betrüger versucht Steam oder Origin zu installieren',
            'Der Betrüger sucht nach einem Lan-Password',
            'Das Programm syskey kann nicht missbräuchlich vom Betrüger verwendet werden ' +
            'und ist deswegen zu vernachlässigen',
            'MacOS ist sicher da helfen auch keine tricks!'],
        answer:1
    },

    {
        q:'Welche der folgenden Maßnahmen können einen Betrieb vor Social Engineering Attacken schützen?',
        options:[
            'Regelmäßige Unittests',
            'Verschlüsselung ',
            'Ausführliche technische Dokumentation für die Mitarbeiter',
            'Fortlaufende Mitarbeiterschulungen',
            'Bunte Flyer'],
        answer:3


    },

    {
        q:'Welche Maßnahmen können NICHT vor Scam-Anrufen schützen? ',
        options:[
            'Keine internen Telefonnummern durchgeben',
            'Keine Namen von Kollegen preisgeben',
            'Durch gezielte Fragen die Identität des Anrufers feststellen',
            'Keine Software nach Aufforderung am Telefon installieren',
            'Identitätsnachweis am Telefon mit Personalnummer'],
        answer:4

    },

    {
        q:'Welche Anzeichen verraten eine Phishing-Attacke NICHT ',
        options:[
            'Der Absendername sieht vertrauenswürdig aus',
            'Der Link beinhaltet kein “https:/” (HyperText Transfer Protocol Secure) ',
            'Sie werden aufgefordert, vertrauliche Daten wie die PIN für Ihren Online-Bankzugang oder ' +
            'eine Kreditkartennummer einzugeben',
            'Immer wenn Sie eine E-Mail mit Link bekommen und dann Ihre Anmeldedaten mit Passwort eingeben müssen, ' +
            'ist das ein Zeichen, dass es sich um eine Phishing-Mail handelt',
            'Auf der Webseite, auf die man geführt wird, funktionieren die anderen angezeigten Menüpunkte nicht, ' +
            'beziehungsweise erzeugen Fehlermeldungen'],
        answer:4

    },

    {
        q:'Wie gefährlich ist Phishing? ',
        options:[
            'Eine Phishing Mail mit einem Anhang kann Schadsoftware auf dem PC, Smartphone oder Tablet installieren',
            'Sobald die Email nur geöffnet wird, hat der Hacker Zugriff auf den kompletten PC',
            'Öffnet man eine phishing Mail für Instagram, hat der Hacker Zugriff auf den Instagram Account',
            'Ungefährlich, denn Phishing Mails landen immer im Spamordner und sind somit leicht zu erkennen',
            'Ungefährlich, da E-Mail Dienste phishing Mails immer erkennen und den Nutzer warnen'
        ],
        answer:0

    },

    {
        q:'Welche Person wäre besonders anfällig für einen Scam-Anruf?',
        options:[
            'Ein Geschäftsführer',
            'Ein gestandener Entwickler',
            'Jemand aus dem Service Desk',
            'Ein ganz neuer Angestellter',
            'Die Teamleiterin'
        ],
        answer:3
    },

    {
        q:'Mit welcher Maßnahme kann man am besten Webseiten gegen Social Engineering schützen?',
        options:[
            'Kein Login-System',
            'Mit Zwei-Faktor-Authentifizierung',
            'Besseres UI-Design',
            'Komplexerer Code',
            'Spagetti-Code'
        ],
        answer:1
    }
]