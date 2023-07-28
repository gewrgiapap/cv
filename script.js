/* Αλλαγή θέματος (dark/light)*/
// Αρχικοποίηση της μεταβλητής για το θέμα
let isDarkMode = false;

// Συνάρτηση εναλλαγής θέματος
function toggleTheme() {
  const body = document.body;
  
  // Αντιστροφή της τιμής της μεταβλητής για το θέμα
  isDarkMode = !isDarkMode;
  
  // Εφαρμογή του σωστού θέματος στο body
  if (isDarkMode) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }
}

// Συνάρτηση για αλλαγή γλώσσας
function changeLanguage(lang) {
  var headerEl = document.getElementById("header-el");
  var headerEn = document.getElementById("header-en");
  var sectionsEl = document.querySelectorAll('[lang="el"]');
  var sectionsEn = document.querySelectorAll('[lang="en"]');

  if (lang === "el") {
    // Εμφάνιση του ελληνικού κειμένου και απόκρυψη του αγγλικού κειμένου
    headerEl.style.display = "block";
    headerEn.style.display = "none";

    sectionsEl.forEach(function (section) {
      section.style.display = "block";
    });

    sectionsEn.forEach(function (section) {
      section.style.display = "none";
    });
  } else if (lang === "en") {
    // Εμφάνιση του αγγλικού κειμένου και απόκρυψη του ελληνικού κειμένου
    headerEl.style.display = "none";
    headerEn.style.display = "block";

    sectionsEl.forEach(function (section) {
      section.style.display = "none";
    });

    sectionsEn.forEach(function (section) {
      section.style.display = "block";
    });
  }
}

// Συνάρτηση για την εφέ προφίλ
function animateProfilePicture() {
  const profilePicture = document.getElementById('profilePicture');

  // Προσθέστε τις κλάσεις rotate και scale για να εφαρμόσετε περιστροφή και μεγέθυνση της εικόνας κατά την αλλαγή του ποντικιού πάνω από την εικόνα
  profilePicture.classList.add('rotate', 'scale');

  // Αφαιρέστε τις κλάσεις rotate και scale για να επαναφέρετε την εικόνα στην αρχική της κατάσταση όταν το ποντίκι βγαίνει από πάνω της
  profilePicture.addEventListener('mouseleave', function () {
    profilePicture.classList.remove('rotate', 'scale');
  });
}

// Συνάρτηση για progress bar
// Όταν το παράθυρο φορτώνεται, εκτελείται το ακόλουθο JavaScript κώδικα
// Επιλέγουμε όλα τα elements με κλάση "progressbar__inner"
const progressBars = document.querySelectorAll('.progressbar__inner');

// Συνάρτηση για τον υπολογισμό του ποσοστού που πρέπει να αυξηθεί
function animateProgressBar(element, targetPercent) {
  let currentPercent = 0;
  const increment = 2; // Μονάδα αύξησης (μπορείτε να αλλάξετε αν θέλετε πιο αργή/γρήγορη αύξηση)

  function increaseWidth() {
    currentPercent += increment;
    if (currentPercent <= targetPercent) {
      element.style.width = currentPercent + '%';
      element.textContent = currentPercent + '%'; // Αλλάζουμε το κείμενο της μπάρας με το ποσοστό
      requestAnimationFrame(increaseWidth);
    }
  }

  increaseWidth();
}

// Εφαρμόζουμε την αναλυτική περιγραφή σε κάθε μπάρα
progressBars.forEach((bar) => {
  const targetPercent = bar.getAttribute('data-percent');
  animateProgressBar(bar, targetPercent);
});
