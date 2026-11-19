// ============================================================
// REVISE WITH CONFIDENCE
// FULL JAVASCRIPT
// iOS 26 GLASS UI VERSION
// ============================================================


// ============================================================
// DEFAULT DATA
// ============================================================

const defaultYearList = [
  "Year 9",
  "Year 10",
  "Year 11",
  "Year 12"
];


const defaultSubjectMap = {

  "Year 9": [
    "biology",
    "chemistry",
    "mathematics"
  ],

  "Year 10": [
    "biology",
    "chemistry",
    "mathematics",
    "history"
  ],

  "Year 11": [
    "biology",
    "chemistry",
    "mathematics",
    "history",
    "literature"
  ],

  "Year 12": [
    "biology",
    "chemistry",
    "mathematics",
    "history",
    "literature"
  ]

};


// ============================================================
// PRE-WRITTEN NOTES
// ============================================================

const preWrittenNotes = {

  biology: `BIOLOGY REVISION NOTES

Cell Theory
• All living organisms are made of cells.
• Cells are the basic unit of life.
• New cells come from pre-existing cells.

Cell Types
• Prokaryotic cells do not have a nucleus; eukaryotic cells have a nucleus and membrane-bound organelles.
• Cell membranes control which substances enter and leave cells.

Mitosis
1. Prophase: chromosomes condense and nuclear membrane breaks down.
2. Metaphase: chromosomes line up at the cell equator.
3. Anaphase: sister chromatids are pulled apart.
4. Telophase: new nuclei form.
• Cytokinesis then separates the cytoplasm to form two daughter cells.

Respiration
Glucose + Oxygen → Carbon dioxide + Water + ATP
• Aerobic respiration releases usable energy as ATP; it needs glucose and oxygen.

DNA
• Double-helix structure.
• A pairs with T.
• G pairs with C.
• DNA stores genetic information.

Sources & Further Reading
• <a href="https://openstax.org/books/biology-2e/pages/4-1-studying-cells" target="_blank" rel="noopener noreferrer">OpenStax Biology 2e: Studying Cells</a>
• <a href="https://openstax.org/books/biology-2e/pages/10-2-the-cell-cycle" target="_blank" rel="noopener noreferrer">OpenStax Biology 2e: The Cell Cycle</a>
• <a href="https://openstax.org/books/biology-2e/pages/7-chapter-summary" target="_blank" rel="noopener noreferrer">OpenStax Biology 2e: Cellular Respiration Summary</a>`,

  chemistry: `CHEMISTRY REVISION NOTES

Atomic Structure
• Atomic number = number of protons.
• Mass number = protons + neutrons.
• Electrons occupy shells around the nucleus.
• A neutral atom has equal numbers of protons and electrons.

Bonding
1. Ionic bonding: electron transfer forms oppositely charged ions that attract.
2. Covalent bonding: atoms share pairs of electrons.
3. Metals are held together by attraction between positive ions and delocalised electrons.

Moles
• 1 mole = 6.02 × 10²³ particles.
• moles = mass ÷ molar mass
• Use a balanced equation to compare mole ratios in a reaction.

Organic Chemistry
• Alkanes contain single C-C bonds.
• Alkenes contain C=C double bonds.
• Functional groups affect chemical properties.

Sources & Further Reading
• <a href="https://edu.rsc.org/cpd/teaching-structure-and-bonding-post-16/4013267.article" target="_blank" rel="noopener noreferrer">Royal Society of Chemistry: Structure and Bonding</a>
• <a href="https://edu.rsc.org/cpd/how-to-teach-covalent-bonding/4016381.article" target="_blank" rel="noopener noreferrer">Royal Society of Chemistry: Covalent Bonding</a>`,

  mathematics: `MATHEMATICS REVISION NOTES

Differentiation
d/dx (xⁿ) = n xⁿ⁻¹
• Differentiation gives the gradient of a curve or the rate of change.
• Example: d/dx (x³) = 3x².

Integration
∫ xⁿ dx = xⁿ⁺¹/(n+1) + C
• Integration is the reverse of differentiation; C is the constant of integration.

Statistics
• Mean = total ÷ number of values.
• Median = middle value.
• Mode = most frequent value.
• Standard deviation measures spread.
• Range = largest value − smallest value.

Trigonometry
Pythagoras:
a² + b² = c²

sin θ, cos θ and tan θ are used for right-angled triangles.
• SOH CAH TOA: sin = opposite/hypotenuse, cos = adjacent/hypotenuse, tan = opposite/adjacent.

Sources & Further Reading
• <a href="https://openstax.org/books/algebra-and-trigonometry-2e/pages/2-key-concepts" target="_blank" rel="noopener noreferrer">OpenStax Algebra and Trigonometry 2e: Key Concepts</a>
• <a href="https://openstax.org/books/algebra-and-trigonometry-2e/pages/preface" target="_blank" rel="noopener noreferrer">OpenStax Algebra and Trigonometry 2e</a>`,

  history: `HISTORY REVISION NOTES

Cold War (1947–1991)
• A period of geopolitical rivalry between the United States and the Soviet Union and their allies.
• It involved political pressure, military alliances, an arms race and proxy conflicts rather than direct full-scale war between the superpowers.

Key Events
• Berlin Blockade 1948–49
• Cuban Missile Crisis 1962
• Vietnam War
• The Cuban Missile Crisis brought the superpowers close to nuclear conflict; Soviet missiles were later removed from Cuba.

Treaty of Versailles 1919
• A peace treaty negotiated after World War I.
• Germany lost territory, faced military restrictions and accepted liability for reparations under the treaty.

Decolonisation
• Many colonies gained independence after World War II, reshaping global politics.

Sources & Further Reading
• <a href="https://history.state.gov/milestones/1961-1968/cuban-missile-crisis" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian: Cuban Missile Crisis</a>
• <a href="https://history.state.gov/milestones/1914-1920/paris-peace" target="_blank" rel="noopener noreferrer">U.S. Office of the Historian: Treaty of Versailles</a>`,

  literature: `LITERATURE REVISION NOTES

Poetry
• Imagery creates mental pictures.
• Sonnet = 14-line poem.
• Free verse has no strict rhyme or meter.
• Consider sound devices such as alliteration, assonance and rhythm when analysing a poem.

Prose
• Narrative voice = who tells the story.
• Characterisation = how personalities are developed.
• Setting = time, place and atmosphere.
• Theme is a central idea explored through a text, not simply its topic.

Drama
• Tragic hero
• Dramatic irony
• Soliloquy
• A soliloquy lets a character express thoughts while alone on stage.

Common Themes
• Power
• Identity
• Love
• Social class

Sources & Further Reading
• <a href="https://www.poetryfoundation.org/education/glossary/sonnet" target="_blank" rel="noopener noreferrer">Poetry Foundation: Sonnet</a>
• <a href="https://www.poetryfoundation.org/education/glossary/irony" target="_blank" rel="noopener noreferrer">Poetry Foundation: Irony</a>
• <a href="https://www.poetryfoundation.org/education/glossary/soliloquy" target="_blank" rel="noopener noreferrer">Poetry Foundation: Soliloquy</a>`

};


// ============================================================
// DEFAULT STATE
// ============================================================

const defaultState = {

  yearList:
    [...defaultYearList],

  yearSubjectMap:
    JSON.parse(
      JSON.stringify(
        defaultSubjectMap
      )
    ),

  notesData: {},

  customNotes: [],

  currentCustomNoteId:
    null,

  currentYear:
    "Year 10",

  currentSubject:
    "biology",

  darkMode:
    false

};


let state;


// ============================================================
// LOAD STATE
// ============================================================

try {

  const saved =
    localStorage.getItem(
      "reviseToolState"
    );

  state =
    saved
      ? JSON.parse(saved)
      : JSON.parse(
          JSON.stringify(
            defaultState
          )
        );

} catch (error) {

  console.warn(
    "Could not load saved state."
  );

  state =
    JSON.parse(
      JSON.stringify(
        defaultState
      )
    );

}


// ============================================================
// REPAIR STATE
// ============================================================

function repairState() {

  if (!Array.isArray(state.yearList)) {

    state.yearList =
      [...defaultYearList];

  }


  if (
    !state.yearSubjectMap ||
    typeof state.yearSubjectMap !== "object"
  ) {

    state.yearSubjectMap =
      JSON.parse(
        JSON.stringify(
          defaultSubjectMap
        )
      );

  }


  if (
    !state.notesData ||
    typeof state.notesData !== "object"
  ) {

    state.notesData = {};

  }


  if (!Array.isArray(state.customNotes)) {

    state.customNotes = [];

  }


  if (!state.currentYear) {

    state.currentYear =
      "Year 10";

  }


  if (!state.currentSubject) {

    state.currentSubject =
      "biology";

  }


  if (
    typeof state.darkMode !== "boolean"
  ) {

    state.darkMode =
      false;

  }


  state.yearList.forEach(
    year => {

      if (
        !Array.isArray(
          state.yearSubjectMap[year]
        )
      ) {

        state.yearSubjectMap[year] =
          [];

      }


      if (!state.notesData[year]) {

        state.notesData[year] =
          {};

      }


      state.yearSubjectMap[year]
        .forEach(
          subject => {

            if (
              state.notesData[year][subject] ===
              undefined ||
              state.notesData[year][subject] ===
              null
            ) {

              state.notesData[year][subject] =
                preWrittenNotes[subject] ||
                "";

            }

          }
        );

    }
  );


  if (
    !state.yearList.includes(
      state.currentYear
    )
  ) {

    state.currentYear =
      state.yearList[0] ||
      "Year 10";

  }


  const subjects =
    state.yearSubjectMap[
      state.currentYear
    ] || [];


  if (
    !subjects.includes(
      state.currentSubject
    )
  ) {

    state.currentSubject =
      subjects[0] || "";

  }

}


repairState();


// The app now uses the built-in year and subject catalogue only.
function removeCustomYearAndSubjects() {

  const previousNotes =
    state.notesData || {};

  const builtInNotes = {};

  defaultYearList.forEach(
    year => {

      builtInNotes[year] = {};

      defaultSubjectMap[year].forEach(
        subject => {

          builtInNotes[year][subject] =
            previousNotes[year]?.[subject] ||
            preWrittenNotes[subject] ||
            "";

        }
      );

    }
  );

  state.yearList = [...defaultYearList];
  state.yearSubjectMap =
    JSON.parse(JSON.stringify(defaultSubjectMap));
  state.notesData = builtInNotes;

  if (!state.yearList.includes(state.currentYear)) {
    state.currentYear = "Year 10";
  }

  if (
    !state.yearSubjectMap[state.currentYear].includes(
      state.currentSubject
    )
  ) {
    state.currentSubject =
      state.yearSubjectMap[state.currentYear][0];
  }
}


removeCustomYearAndSubjects();


// ============================================================
// SAVE
// ============================================================

function saveStateToLocal() {

  try {

    localStorage.setItem(
      "reviseToolState",
      JSON.stringify(state)
    );

  } catch (error) {

    console.error(
      "Could not save state:",
      error
    );

  }

}


// ============================================================
// INITIALISE NOTES
// ============================================================

function getReferenceSection(note) {

  const marker =
    "Sources & Further Reading";

  const markerIndex =
    note.indexOf(marker);

  return markerIndex === -1
    ? ""
    : note.slice(markerIndex);
}

function initialisePreWrittenNotes() {

  state.yearList.forEach(
    year => {

      if (!state.notesData[year]) {

        state.notesData[year] =
          {};

      }


      const subjects =
        state.yearSubjectMap[
          year
        ] || [];


      subjects.forEach(
        subject => {

          if (
            state.notesData[year][subject] ===
            undefined
          ) {

            state.notesData[year][subject] =
              preWrittenNotes[subject] ||
              "";

          }


          const savedNote =
            state.notesData[year][subject];

          const referenceSection =
            preWrittenNotes[subject]
              ? getReferenceSection(
                  preWrittenNotes[subject]
                )
              : "";

          if (
            typeof savedNote === "string" &&
            referenceSection &&
            !savedNote.includes(
              "Sources & Further Reading"
            )
          ) {

            state.notesData[year][subject] =
              `${savedNote}\n\n${referenceSection}`;

          }

        }
      );

    }
  );


  saveStateToLocal();

}


initialisePreWrittenNotes();


// ============================================================
// DOM
// ============================================================

const mainNav =
  document.getElementById(
    "main-nav"
  );


const yearBtnGroup =
  document.getElementById(
    "yearBtnGroup"
  );


const subjectSection =
  document.getElementById(
    "subjectSection"
  );


const selectedYearDisplay =
  document.getElementById(
    "selectedYearDisplay"
  );


const subjectList =
  document.getElementById(
    "subjectList"
  );


const noteEditor =
  document.getElementById(
    "noteEditor"
  );


const notesSubjectTitle =
  document.getElementById(
    "notesSubjectTitle"
  );


const currentYearBadge =
  document.getElementById(
    "currentYearBadge"
  );


const currentSubjectBadge =
  document.getElementById(
    "currentSubjectBadge"
  );


const exportPreview =
  document.getElementById(
    "exportPreview"
  );


const editToggleBtn =
  document.getElementById(
    "editToggleBtn"
  );


const highlightBtn =
  document.getElementById(
    "highlightBtn"
  );


const removeSingleHighlightBtn =
  document.getElementById(
    "removeSingleHighlightBtn"
  );


const clearHighlightBtn =
  document.getElementById(
    "clearHighlightBtn"
  );


const resetNoteBtn =
  document.getElementById(
    "resetNoteBtn"
  );


// ============================================================
// CUSTOM NOTES DOM
// ============================================================

const customNoteListWrap =
  document.getElementById(
    "customNoteListWrap"
  );


const noteTitleInput =
  document.getElementById(
    "noteTitleInput"
  );


const newBlankNoteBtn =
  document.getElementById(
    "newBlankNoteBtn"
  );


const newBlankNoteBtn2 =
  document.getElementById(
    "newBlankNoteBtn2"
  );


const saveCustomNoteBtn =
  document.getElementById(
    "saveCustomNoteBtn"
  );


const deleteCurrentNoteBtn =
  document.getElementById(
    "deleteCurrentNoteBtn"
  );


const togglePinNoteBtn =
  document.getElementById(
    "togglePinNoteBtn"
  );


const allNotesFolder =
  document.getElementById(
    "allNotesFolder"
  );


const pinnedNotesFolder =
  document.getElementById(
    "pinnedNotesFolder"
  );


let customNoteFilter =
  "all";


let customNoteArea =
  document.getElementById(
    "customNoteArea"
  );


// ============================================================
// DARK MODE DOM
// ============================================================

const darkToggle =
  document.getElementById(
    "darkModeToggle"
  );


const dashboardDarkMode =
  document.getElementById(
    "dashboardDarkMode"
  );


const dashboardDarkIcon =
  document.getElementById(
    "dashboardDarkIcon"
  );


const dashboardDarkTitle =
  document.getElementById(
    "dashboardDarkTitle"
  );


const dashboardDarkSubtitle =
  document.getElementById(
    "dashboardDarkSubtitle"
  );


// ============================================================
// OTHER DOM
// ============================================================

const textSelectPopup =
  document.getElementById(
    "textSelectPopup"
  );


const popupTranslateBtn =
  document.getElementById(
    "popupTranslateBtn"
  );


const popupSearchBtn =
  document.getElementById(
    "popupSearchBtn"
  );


const popupRemoveHighlightBtn =
  document.getElementById(
    "popupRemoveHighlightBtn"
  );


let selectedText =
  "";


const inputNewYear =
  document.getElementById(
    "inputNewYear"
  );


const inputNewSubject =
  document.getElementById(
    "inputNewSubject"
  );


const btnAddYear =
  document.getElementById(
    "btnAddYear"
  );


const btnAddSubject =
  document.getElementById(
    "btnAddSubject"
  );


const customListBox =
  document.getElementById(
    "customListBox"
  );


const customConfirmModal =
  document.getElementById(
    "customConfirmModal"
  );


const modalTitle =
  document.getElementById(
    "modalTitle"
  );


const modalMessage =
  document.getElementById(
    "modalMessage"
  );


const modalCancel =
  document.getElementById(
    "modalCancel"
  );


const modalConfirm =
  document.getElementById(
    "modalConfirm"
  );


let confirmationResolve = null;


function closeCustomConfirm(
  result
) {

  if (customConfirmModal) {

    customConfirmModal.classList.remove(
      "active"
    );

  }

  if (
    confirmationResolve
  ) {

    const resolve =
      confirmationResolve;

    confirmationResolve = null;

    resolve(result);

  }

}


function showCustomConfirm({
  title = "Confirm",
  message = "Are you sure?",
  confirmText = "Confirm Delete",
  cancelText = "Keep It"
}) {

  return new Promise(
    resolve => {

      if (
        !customConfirmModal ||
        !modalTitle ||
        !modalMessage ||
        !modalCancel ||
        !modalConfirm
      ) {

        resolve(
          window.confirm(message)
        );

        return;

      }

      confirmationResolve = resolve;

      modalTitle.textContent = title;
      modalMessage.textContent = message;
      modalCancel.textContent = cancelText;
      modalConfirm.textContent = confirmText;

      customConfirmModal.classList.add(
        "active"
      );

    }
  );

}


if (modalCancel) {

  modalCancel.addEventListener(
    "click",
    () => {
      closeCustomConfirm(false);
    }
  );

}


if (modalConfirm) {

  modalConfirm.addEventListener(
    "click",
    () => {
      closeCustomConfirm(true);
    }
  );

}


if (customConfirmModal) {

  customConfirmModal.addEventListener(
    "click",
    event => {

      if (
        event.target ===
        customConfirmModal
      ) {

        closeCustomConfirm(false);

      }

    }
  );

}


// ============================================================
// SAFE EVENT
// ============================================================

function safeAddEvent(
  element,
  event,
  callback
) {

  if (element) {

    element.addEventListener(
      event,
      callback
    );

  }

}


// ============================================================
// DARK MODE
// COMPLETELY SEPARATE FROM NAVIGATION
// ============================================================

function updateDarkModeUI() {

  const isDark =
    state.darkMode;


  document.body.classList.toggle(
    "dark",
    isDark
  );


  /* TOP NAV */

  if (darkToggle) {

    darkToggle.innerHTML =
      isDark
        ? '<i class="fas fa-sun"></i><span>Light Mode</span>'
        : '<i class="fas fa-moon"></i><span>Dark Mode</span>';

    darkToggle.title =
      isDark
        ? "Switch to Light Mode"
        : "Switch to Dark Mode";

  }


  /* DASHBOARD CARD */

  if (dashboardDarkIcon) {

    dashboardDarkIcon.className =
      isDark
        ? "fas fa-sun"
        : "fas fa-moon";

  }


  if (dashboardDarkTitle) {

    dashboardDarkTitle.textContent =
      isDark
        ? "Light mode"
        : "Dark mode";

  }


  if (dashboardDarkSubtitle) {

    dashboardDarkSubtitle.textContent =
      isDark
        ? "Switch back to light appearance"
        : "Switch between light and dark";

  }

}


function toggleDarkMode() {

  state.darkMode =
    !state.darkMode;

  saveStateToLocal();

  updateDarkModeUI();

}


safeAddEvent(
  darkToggle,
  "click",
  toggleDarkMode
);


safeAddEvent(
  dashboardDarkMode,
  "click",
  toggleDarkMode
);


// ============================================================
// NAVIGATION
// ============================================================

window.navigateTo =
  function(pageId) {

    /* Hide all pages */

    document
      .querySelectorAll(".page")
      .forEach(
        page => {

          page.classList.remove(
            "active"
          );

        }
      );


    const targetPage =
      document.getElementById(
        "page-" + pageId
      );


    if (!targetPage) {

      console.warn(
        `Page page-${pageId} does not exist.`
      );

      return;

    }


    targetPage.classList.add(
      "active"
    );


    /* Navigation visibility */

    if (pageId === "welcome") {

      if (mainNav) {

        mainNav.style.display =
          "none";

      }

    } else {

      if (mainNav) {

        mainNav.style.display =
          "flex";

      }

    }


    /* Active navigation */

    document
      .querySelectorAll(
        ".nav-link"
      )
      .forEach(
        link => {

          link.classList.remove(
            "active-link"
          );

        }
      );


    if (
      pageId !== "welcome"
    ) {

      const activeLink =
        document.querySelector(
          `.nav-link[data-page="${pageId}"]`
        );


      if (activeLink) {

        activeLink.classList.add(
          "active-link"
        );

      }

    }


    hideTextPopup();


    /* Page-specific */

    if (
      pageId === "subjects"
    ) {

      renderYearButtons();

      renderSubjectForYear();

      if (subjectSection) {

        subjectSection.style.display =
          "block";

      }

    }


    if (
      pageId === "notes"
    ) {

      loadRevisionNote();

    }


    if (
      pageId === "createnote"
    ) {

      renderCustomNoteList();

      loadActiveCustomNote();

    }


    if (
      pageId === "custommanage"
    ) {

      renderCustomList();

    }


    if (
      pageId === "export"
    ) {

      updateExportPreview();

    }

  };


// ============================================================
// NAVIGATION LINKS
// ============================================================

document
  .querySelectorAll(
    ".nav-link"
  )
  .forEach(
    link => {

      link.addEventListener(
        "click",
        event => {

          event.preventDefault();

          const page =
            link.dataset.page;

          if (page) {

            navigateTo(page);

          }

        }
      );

    }
  );


// ============================================================
// DASHBOARD CARDS
// ============================================================

document
  .querySelectorAll(
    ".clickable-card"
  )
  .forEach(
    card => {

      card.addEventListener(
        "click",
        () => {

          const target =
            card.dataset.goto;

          if (target) {

            navigateTo(target);

          }

        }
      );

    }
  );


// ============================================================
// YEAR BUTTONS
// ============================================================

function renderYearButtons() {

  if (!yearBtnGroup) return;


  yearBtnGroup.innerHTML =
    "";


  state.yearList.forEach(
    year => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "year-btn";


      button.textContent =
        year;


      if (
        year ===
        state.currentYear
      ) {

        button.classList.add(
          "active"
        );

      }


      button.addEventListener(
        "click",
        () => {

          saveCurrentRevisionNote();


          state.currentYear =
            year;


          const subjects =
            state.yearSubjectMap[
              year
            ] || [];


          if (
            !subjects.includes(
              state.currentSubject
            )
          ) {

            state.currentSubject =
              subjects[0] || "";

          }


          saveStateToLocal();


          renderYearButtons();

          renderSubjectForYear();

        }
      );


      yearBtnGroup.appendChild(
        button
      );

    }
  );

}


// ============================================================
// SUBJECTS
// ============================================================

function renderSubjectForYear() {

  if (!subjectList) return;


  subjectList.innerHTML =
    "";


  const subjects =
    state.yearSubjectMap[
      state.currentYear
    ] || [];


  if (selectedYearDisplay) {

    selectedYearDisplay.textContent =
      state.currentYear;

  }


  subjects.forEach(
    subject => {

      const button =
        document.createElement(
          "button"
        );


      button.className =
        "subject-btn";


      button.textContent =
        subject
          .charAt(0)
          .toUpperCase() +
        subject.slice(1);


      if (
        subject ===
        state.currentSubject
      ) {

        button.classList.add(
          "active"
        );

      }


      button.addEventListener(
        "click",
        () => {

          saveCurrentRevisionNote();


          state.currentSubject =
            subject;


          saveStateToLocal();


          loadRevisionNote();

          renderSubjectForYear();

          navigateTo(
            "notes"
          );

        }
      );


      subjectList.appendChild(
        button
      );

    }
  );


  const message =
    document.getElementById(
      "subjectMessage"
    );


  if (message) {

    message.textContent =
      `Current: ${state.currentYear} | ${state.currentSubject}`;

  }

}


// ============================================================
// REVISION NOTES
// ============================================================

function saveCurrentRevisionNote() {

  if (!noteEditor) return;


  if (
    !state.notesData[
      state.currentYear
    ]
  ) {

    state.notesData[
      state.currentYear
    ] = {};

  }


  state.notesData[
    state.currentYear
  ][
    state.currentSubject
  ] =
    noteEditor.innerHTML;


  saveStateToLocal();

}


function loadRevisionNote() {

  if (!noteEditor) return;


  if (
    !state.notesData[
      state.currentYear
    ]
  ) {

    state.notesData[
      state.currentYear
    ] = {};

  }


  let content =
    state.notesData[
      state.currentYear
    ][
      state.currentSubject
    ];


  if (
    content === undefined ||
    content === null
  ) {

    content =
      preWrittenNotes[
        state.currentSubject
      ] || "";

  }


  noteEditor.innerHTML =
    content.replace(
      /\n/g,
      "<br>"
    );


  const subjectName =
    state.currentSubject
      ? state.currentSubject
          .charAt(0)
          .toUpperCase() +
        state.currentSubject.slice(1)
      : "Notes";


  if (notesSubjectTitle) {

    notesSubjectTitle.textContent =
      `${subjectName} notes`;

  }


  if (currentYearBadge) {

    currentYearBadge.textContent =
      state.currentYear;

  }


  if (currentSubjectBadge) {

    currentSubjectBadge.textContent =
      state.currentSubject;

  }


  updateExportPreview();

}


// ============================================================
// EXPORT PREVIEW
// ============================================================

function updateExportPreview() {

  if (!exportPreview) return;


  const raw =
    state.notesData?.[
      state.currentYear
    ]?.[
      state.currentSubject
    ] || "";


  const temp =
    document.createElement(
      "div"
    );


  temp.innerHTML =
    raw;


  const text =
    temp.textContent || "";


  exportPreview.textContent =
    `${state.currentYear} | ${state.currentSubject.toUpperCase()} REVISION NOTES\n\n${text}`;

}


// ============================================================
// EDIT MODE
// ============================================================

let isEditing =
  false;


function toggleEditMode() {

  if (!noteEditor) return;


  isEditing =
    !isEditing;


  if (isEditing) {

    noteEditor.contentEditable =
      "true";

    noteEditor.classList.remove(
      "disabled"
    );


    if (editToggleBtn) {

      editToggleBtn.innerHTML =
        '<i class="fas fa-unlock"></i> Edit mode';

      editToggleBtn.classList.add(
        "active-tool"
      );

    }


    if (highlightBtn) {

      highlightBtn.disabled =
        false;

    }


    if (removeSingleHighlightBtn) {

      removeSingleHighlightBtn.disabled =
        false;

    }


    if (clearHighlightBtn) {

      clearHighlightBtn.disabled =
        false;

    }

  } else {

    noteEditor.contentEditable =
      "false";

    noteEditor.classList.add(
      "disabled"
    );


    if (editToggleBtn) {

      editToggleBtn.innerHTML =
        '<i class="fas fa-lock"></i> Edit mode';

      editToggleBtn.classList.remove(
        "active-tool"
      );

    }


    if (highlightBtn) {

      highlightBtn.disabled =
        true;

    }


    if (removeSingleHighlightBtn) {

      removeSingleHighlightBtn.disabled =
        true;

    }


    if (clearHighlightBtn) {

      clearHighlightBtn.disabled =
        true;

    }


    saveCurrentRevisionNote();

  }

}


safeAddEvent(
  editToggleBtn,
  "click",
  toggleEditMode
);


// ============================================================
// HIGHLIGHT
// ============================================================

function applyHighlight() {

  if (!isEditing) {

    alert(
      "Please enable Edit mode first."
    );

    return;

  }


  const selection =
    window.getSelection();


  if (
    !selection.rangeCount ||
    selection.isCollapsed
  ) {

    alert(
      "Select text first."
    );

    return;

  }


  const range =
    selection.getRangeAt(0);


  if (
    !noteEditor.contains(
      range.commonAncestorContainer
    )
  ) {

    return;

  }


  const span =
    document.createElement(
      "span"
    );


  span.className =
    "highlighted";


  try {

    range.surroundContents(
      span
    );


    selection.removeAllRanges();

    saveCurrentRevisionNote();

  } catch (error) {

    alert(
      "Please select a continuous text block."
    );

  }

}


safeAddEvent(
  highlightBtn,
  "click",
  applyHighlight
);


// ============================================================
// REMOVE SINGLE HIGHLIGHT
// ============================================================

function removeSingleHighlight() {

  if (!isEditing) return;


  const selection =
    window.getSelection();


  let node =
    selection.anchorNode;


  while (
    node &&
    node !== noteEditor
  ) {

    if (
      node.classList &&
      node.classList.contains(
        "highlighted"
      )
    ) {

      const parent =
        node.parentNode;


      parent.replaceChild(
        document.createTextNode(
          node.textContent
        ),
        node
      );


      parent.normalize();

      saveCurrentRevisionNote();

      selection.removeAllRanges();

      hideTextPopup();

      return;

    }


    node =
      node.parentNode;

  }


  alert(
    "Please select inside highlighted text."
  );

}


safeAddEvent(
  removeSingleHighlightBtn,
  "click",
  removeSingleHighlight
);


safeAddEvent(
  popupRemoveHighlightBtn,
  "click",
  removeSingleHighlight
);


// ============================================================
// CLEAR HIGHLIGHTS
// ============================================================

safeAddEvent(
  clearHighlightBtn,
  "click",
  async () => {

    if (!isEditing) {

      alert(
        "Enable Edit mode first."
      );

      return;

    }


    const highlights =
      noteEditor.querySelectorAll(
        ".highlighted"
      );


    if (
      highlights.length === 0
    ) {

      alert(
        "No highlights found."
      );

      return;

    }


    const shouldRemove =
      await showCustomConfirm({
        title: "Clear Highlights",
        message: "Remove ALL highlights for this note?",
        confirmText: "Confirm Delete",
        cancelText: "Keep It"
      });


    if (shouldRemove) {

      highlights.forEach(
        highlight => {

          const parent =
            highlight.parentNode;


          parent.replaceChild(
            document.createTextNode(
              highlight.textContent
            ),
            highlight
          );


          parent.normalize();

        }
      );


      saveCurrentRevisionNote();

    }

  }
);


// ============================================================
// RESET NOTE
// ============================================================

safeAddEvent(
  resetNoteBtn,
  "click",
  async () => {

    const shouldReset =
      await showCustomConfirm({
        title: "Reset Note",
        message: "Reset note back to original pre-written content? Your edits will be lost.",
        confirmText: "Confirm Delete",
        cancelText: "Keep It"
      });


    if (shouldReset) {

      const original =
        preWrittenNotes[
          state.currentSubject
        ] || "";


      state.notesData[
        state.currentYear
      ][
        state.currentSubject
      ] =
        original;


      saveStateToLocal();

      loadRevisionNote();

    }

  }
);


// ============================================================
// REVISION NOTE INPUT
// ============================================================

safeAddEvent(
  noteEditor,
  "input",
  () => {

    if (isEditing) {

      saveCurrentRevisionNote();

    }

  }
);


// ============================================================
// TEXT POPUP
// ============================================================

function hideTextPopup() {

  if (textSelectPopup) {

    textSelectPopup.style.display =
      "none";

  }

}


function showTextPopup(
  x,
  y
) {

  if (!textSelectPopup) return;


  textSelectPopup.style.left =
    `${x}px`;

  textSelectPopup.style.top =
    `${y}px`;

  textSelectPopup.style.display =
    "flex";

}


safeAddEvent(
  noteEditor,
  "mouseup",
  () => {

    setTimeout(
      () => {

        const selection =
          window.getSelection();


        selectedText =
          selection
            .toString()
            .trim();


        if (
          selectedText &&
          selection.anchorNode &&
          noteEditor.contains(
            selection.anchorNode
          )
        ) {

          const rect =
            selection
              .getRangeAt(0)
              .getBoundingClientRect();


          showTextPopup(
            rect.right +
              window.scrollX +
              8,

            rect.bottom +
              window.scrollY +
              8
          );

        } else {

          hideTextPopup();

        }

      },
      10
    );

  }
);


document.addEventListener(
  "mousedown",
  event => {

    if (
      textSelectPopup &&
      !textSelectPopup.contains(
        event.target
      )
    ) {

      hideTextPopup();

    }

  }
);


// ============================================================
// TRANSLATE
// ============================================================

safeAddEvent(
  popupTranslateBtn,
  "click",
  () => {

    if (!selectedText) return;


    window.open(
      `https://translate.google.com/?sl=auto&tl=zh-CN&text=${encodeURIComponent(selectedText)}&op=translate`,
      "_blank"
    );


    hideTextPopup();

  }
);


// ============================================================
// GOOGLE SEARCH
// ============================================================

safeAddEvent(
  popupSearchBtn,
  "click",
  () => {

    if (!selectedText) return;


    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`,
      "_blank"
    );


    hideTextPopup();

  }
);


// ============================================================
// PDF
// ============================================================

const exportPdfBtn =
  document.getElementById(
    "exportPdfBtn"
  );


safeAddEvent(
  exportPdfBtn,
  "click",
  () => {

    if (!window.jspdf) {

      alert(
        "PDF library could not be loaded."
      );

      return;

    }


    const {
      jsPDF
    } =
      window.jspdf;


    const doc =
      new jsPDF();


    const content =
      exportPreview?.textContent ||
      "No content";


    doc.setFontSize(
      12
    );


    const lines =
      doc.splitTextToSize(
        content,
        180
      );


    doc.text(
      lines,
      15,
      20
    );


    doc.save(
      `${state.currentYear}-${state.currentSubject}-revision.pdf`
    );

  }
);


const refreshExportBtn =
  document.getElementById(
    "refreshExportBtn"
  );


safeAddEvent(
  refreshExportBtn,
  "click",
  updateExportPreview
);


// ============================================================
// ADD YEAR
// ============================================================

safeAddEvent(
  btnAddYear,
  "click",
  () => {

    const value =
      inputNewYear?.value.trim();


    if (!value) {

      alert(
        "Enter year name e.g. Year 13"
      );

      return;

    }


    if (
      state.yearList.includes(
        value
      )
    ) {

      alert(
        "This year already exists."
      );

      return;

    }


    state.yearList.push(
      value
    );


    state.yearSubjectMap[
      value
    ] = [];


    state.notesData[
      value
    ] = {};


    saveStateToLocal();

    renderYearButtons();

    renderCustomList();


    if (inputNewYear) {

      inputNewYear.value =
        "";

    }

  }
);


// ============================================================
// ADD SUBJECT
// ============================================================

safeAddEvent(
  btnAddSubject,
  "click",
  () => {

    const value =
      inputNewSubject?.value
        .trim()
        .toLowerCase();


    if (!value) {

      alert(
        "Enter subject name e.g. economics"
      );

      return;

    }


    if (!state.currentYear) {

      alert(
        "Please select a year first."
      );

      return;

    }


    if (
      !state.yearSubjectMap[
        state.currentYear
      ]
    ) {

      state.yearSubjectMap[
        state.currentYear
      ] = [];

    }


    if (
      state.yearSubjectMap[
        state.currentYear
      ].includes(value)
    ) {

      alert(
        "Subject exists for this year."
      );

      return;

    }


    state.yearSubjectMap[
      state.currentYear
    ].push(value);


    if (
      !state.notesData[
        state.currentYear
      ]
    ) {

      state.notesData[
        state.currentYear
      ] = {};

    }


    state.notesData[
      state.currentYear
    ][value] =
      preWrittenNotes[value] ||
      "Your custom subject note. Write content here.";


    saveStateToLocal();

    renderSubjectForYear();

    renderCustomList();


    if (inputNewSubject) {

      inputNewSubject.value =
        "";

    }

  }
);


// ============================================================
// CUSTOM MANAGER
// ============================================================

function renderCustomList() {

  if (!customListBox) return;


  customListBox.innerHTML =
    "";


  const customYears =
    state.yearList.filter(
      year =>
        !defaultYearList.includes(
          year
        )
    );


  if (
    customYears.length === 0
  ) {

    const empty =
      document.createElement(
        "div"
      );


    empty.className =
      "custom-empty";


    empty.textContent =
      "No custom years yet.";


    customListBox.appendChild(
      empty
    );

  }


  customYears.forEach(
    year => {

      const row =
        document.createElement(
          "div"
        );


      row.className =
        "custom-tag-item";


      const name =
        document.createElement(
          "span"
        );


      name.textContent =
        year;


      const deleteBtn =
        document.createElement(
          "button"
        );


      deleteBtn.type =
        "button";


      deleteBtn.innerHTML =
        '<i class="fas fa-trash"></i>';


      deleteBtn.title =
        "Delete year";


      deleteBtn.addEventListener(
        "click",
        async () => {

          const shouldDelete =
            await showCustomConfirm({
              title: "Delete Year",
              message: `Delete ${year} and all its subjects?`,
              confirmText: "Confirm Delete",
              cancelText: "Keep It"
            });


          if (!shouldDelete) {

            return;

          }


          state.yearList =
            state.yearList.filter(
              y => y !== year
            );


          delete state.yearSubjectMap[
            year
          ];


          delete state.notesData[
            year
          ];


          if (
            state.currentYear ===
            year
          ) {

            state.currentYear =
              state.yearList[0] ||
              "Year 10";


            const subjects =
              state.yearSubjectMap[
                state.currentYear
              ] || [];


            state.currentSubject =
              subjects[0] || "";

          }


          saveStateToLocal();

          renderCustomList();

          renderYearButtons();

          renderSubjectForYear();

        }
      );


      row.appendChild(
        name
      );


      row.appendChild(
        deleteBtn
      );


      customListBox.appendChild(
        row
      );

    }
  );


  const currentSubjects =
    state.yearSubjectMap[
      state.currentYear
    ] || [];


  const defaultSubjects =
    defaultSubjectMap[
      state.currentYear
    ] || [];


  const customSubjects =
    currentSubjects.filter(
      subject =>
        !defaultSubjects.includes(
          subject
        )
    );


  if (
    customSubjects.length > 0
  ) {

    const title =
      document.createElement(
        "div"
      );


    title.className =
      "custom-section-title";


    title.textContent =
      `Subjects in ${state.currentYear}`;


    customListBox.appendChild(
      title
    );


    customSubjects.forEach(
      subject => {

        const row =
          document.createElement(
            "div"
          );


        row.className =
          "custom-tag-item";


        const name =
          document.createElement(
            "span"
          );


        name.textContent =
          subject;


        const deleteBtn =
          document.createElement(
            "button"
          );


        deleteBtn.type =
          "button";


        deleteBtn.innerHTML =
          '<i class="fas fa-trash"></i>';


        deleteBtn.title =
          "Delete subject";


        deleteBtn.addEventListener(
          "click",
          async () => {

            const shouldDelete =
              await showCustomConfirm({
                title: "Delete Subject",
                message: `Delete subject "${subject}"?`,
                confirmText: "Confirm Delete",
                cancelText: "Keep It"
              });


            if (!shouldDelete) {

              return;

            }


            state.yearSubjectMap[
              state.currentYear
            ] =
              state.yearSubjectMap[
                state.currentYear
              ].filter(
                s =>
                  s !== subject
              );


            if (
              state.notesData[
                state.currentYear
              ]
            ) {

              delete state.notesData[
                state.currentYear
              ][subject];

            }


            if (
              state.currentSubject ===
              subject
            ) {

              const remaining =
                state.yearSubjectMap[
                  state.currentYear
                ] || [];


              state.currentSubject =
                remaining[0] || "";

            }


            saveStateToLocal();

            renderCustomList();

            renderSubjectForYear();

          }
        );


        row.appendChild(
          name
        );


        row.appendChild(
          deleteBtn
        );


        customListBox.appendChild(
          row
        );

      }
    );

  }

}


// ============================================================
// CUSTOM NOTES — RICH EDITOR
// ============================================================

function upgradeCustomNoteEditor() {

  if (!customNoteArea) {
    return;
  }


  if (
    customNoteArea.dataset.richEditor ===
    "true"
  ) {

    return;

  }


  const editor =
    document.createElement(
      "div"
    );


  editor.id =
    "customNoteArea";


  editor.className =
    "custom-note-textarea custom-note-editor";


  editor.contentEditable =
    "true";


  editor.dataset.richEditor =
    "true";


  editor.setAttribute(
    "data-placeholder",
    "Start writing..."
  );


  editor.innerHTML =
    customNoteArea.value || "";


  customNoteArea.replaceWith(
    editor
  );


  customNoteArea =
    editor;


  createAppleNotesToolbar();

}


function createAppleNotesToolbar() {

  if (
    document.getElementById(
      "appleNotesToolbar"
    )
  ) {

    return;

  }


  const editor =
    customNoteArea;


  if (!editor) return;


  const toolbar =
    document.createElement(
      "div"
    );


  toolbar.id =
    "appleNotesToolbar";


  toolbar.className =
    "apple-notes-toolbar";


  const buttons = [

    {
      command:
        "bold",

      icon:
        "fa-bold",

      title:
        "Bold"

    },

    {
      command:
        "italic",

      icon:
        "fa-italic",

      title:
        "Italic"

    },

    {
      command:
        "underline",

      icon:
        "fa-underline",

      title:
        "Underline"

    },

    {
      command:
        "insertUnorderedList",

      icon:
        "fa-list-ul",

      title:
        "Bullet list"

    },

    {
      command:
        "insertOrderedList",

      icon:
        "fa-list-ol",

      title:
        "Numbered list"

    }

  ];


  buttons.forEach(
    item => {

      const button =
        document.createElement(
          "button"
        );


      button.type =
        "button";


      button.title =
        item.title;


      button.innerHTML =
        `<i class="fas ${item.icon}"></i>`;


      button.addEventListener(
        "mousedown",
        event => {

          event.preventDefault();

          editor.focus();

          document.execCommand(
            item.command,
            false,
            null
          );

          saveActiveCustomNote();

        }
      );


      toolbar.appendChild(
        button
      );

    }
  );


  const divider =
    document.createElement(
      "span"
    );


  divider.className =
    "apple-toolbar-divider";


  toolbar.appendChild(
    divider
  );


  const clearButton =
    document.createElement(
      "button"
    );


  clearButton.type =
    "button";


  clearButton.title =
    "Clear formatting";


  clearButton.innerHTML =
    '<i class="fas fa-eraser"></i>';


  clearButton.addEventListener(
    "mousedown",
    event => {

      event.preventDefault();

      editor.focus();

      document.execCommand(
        "removeFormat",
        false,
        null
      );

      saveActiveCustomNote();

    }
  );


  toolbar.appendChild(
    clearButton
  );


  editor.parentNode.insertBefore(
    toolbar,
    editor
  );

}


// ============================================================
// CUSTOM NOTE LIST
// ============================================================

function renderCustomNoteList(
  searchTerm = ""
) {

  if (!customNoteListWrap) {
    return;
  }


  customNoteListWrap.innerHTML =
    "";


  const search =
    searchTerm
      .trim()
      .toLowerCase();


  let notes =
    Array.isArray(
      state.customNotes
    )
      ? state.customNotes
      : [];


  if (search) {

    notes =
      notes.filter(
        note => {

          const title =
            (
              note.title ||
              ""
            ).toLowerCase();


          const content =
            stripHTML(
              note.content ||
              ""
            ).toLowerCase();


          return (
            title.includes(
              search
            ) ||
            content.includes(
              search
            )
          );

        }
      );

  }


  if (customNoteFilter === "pinned") {

    notes =
      notes.filter(
        note => note.pinned === true
      );

  }


  if (
    notes.length === 0
  ) {

    const empty =
      document.createElement(
        "div"
      );


    empty.className =
      "custom-empty";


    empty.innerHTML =
      search
        ? "No notes found."
        : "No notes yet.<br>Click <b>New</b> to create one.";


    customNoteListWrap.appendChild(
      empty
    );


    updateNoteCount();

    return;

  }


  notes.forEach(
    note => {

      const item =
        document.createElement(
          "div"
        );


      item.className =
        "note-list-item";


      if (
        note.id ===
        state.currentCustomNoteId
      ) {

        item.classList.add(
          "active-note"
        );

      }


      const title =
        document.createElement(
          "div"
        );


      title.className =
        "note-item-title";


      title.textContent =
        note.title ||
        "Untitled Note";


      const preview =
        document.createElement(
          "div"
        );


      preview.className =
        "note-item-preview";


      preview.textContent =
        stripHTML(
          note.content ||
          ""
        ) ||
        "No additional text";


      const date =
        document.createElement(
          "div"
        );


      date.className =
        "note-item-date";


      date.textContent =
        formatNoteDate(
          note.updatedAt
        );


      const deleteButton =
        document.createElement(
          "button"
        );


      deleteButton.type =
        "button";


      deleteButton.className =
        "note-item-delete";


      deleteButton.innerHTML =
        '<i class="fas fa-trash"></i>';


      deleteButton.title =
        "Delete note";


      deleteButton.addEventListener(
        "click",
        event => {

          event.stopPropagation();

          deleteCustomNote(
            note.id
          );

        }
      );


      item.appendChild(
        title
      );


      item.appendChild(
        preview
      );


      item.appendChild(
        date
      );


      item.appendChild(
        deleteButton
      );


      item.addEventListener(
        "click",
        () => {

          saveActiveCustomNote();


          state.currentCustomNoteId =
            note.id;


          saveStateToLocal();


          loadActiveCustomNote();

          renderCustomNoteList();

        }
      );


      customNoteListWrap.appendChild(
        item
      );

    }
  );


  updateNoteCount();

}


// ============================================================
// NOTE COUNT
// ============================================================

function updateNoteCount() {

  const noteCount =
    document.getElementById(
      "noteCount"
    );


  if (noteCount) {

    noteCount.textContent =
      state.customNotes.length;

  }

}


// ============================================================
// STRIP HTML
// ============================================================

function stripHTML(
  html
) {

  const div =
    document.createElement(
      "div"
    );


  div.innerHTML =
    html || "";


  return (
    div.textContent ||
    div.innerText ||
    ""
  )
    .replace(
      /\s+/g,
      " "
    )
    .trim();

}


// ============================================================
// DATE
// ============================================================

function formatNoteDate(
  timestamp
) {

  if (!timestamp) {

    return "Just now";

  }


  const date =
    new Date(
      timestamp
    );


  if (
    Number.isNaN(
      date.getTime()
    )
  ) {

    return "Just now";

  }


  const now =
    new Date();


  if (
    date.toDateString() ===
    now.toDateString()
  ) {

    return date.toLocaleTimeString(
      [],
      {
        hour:
          "numeric",

        minute:
          "2-digit"
      }
    );

  }


  return date.toLocaleDateString(
    [],
    {
      month:
        "short",

      day:
        "numeric"
    }
  );

}


// ============================================================
// LOAD ACTIVE CUSTOM NOTE
// ============================================================

function loadActiveCustomNote() {

  if (
    !noteTitleInput ||
    !customNoteArea
  ) {

    return;

  }


  const note =
    state.customNotes.find(
      item =>
        item.id ===
        state.currentCustomNoteId
    );


  if (!note) {

    noteTitleInput.value =
      "";


    customNoteArea.innerHTML =
      "";


    updatePinNoteButton();


    return;

  }


  noteTitleInput.value =
    note.title ||
    "";


  customNoteArea.innerHTML =
    note.content ||
    "";


  updatePinNoteButton();

}


// ============================================================
// SAVE CUSTOM NOTE
// ============================================================

function saveActiveCustomNote() {

  if (
    !noteTitleInput ||
    !customNoteArea
  ) {

    return;

  }


  let note =
    state.customNotes.find(
      item =>
        item.id ===
        state.currentCustomNoteId
    );


  if (!note) {

    const hasDraft =
      noteTitleInput.value.trim() ||
      customNoteArea.textContent.trim();

    if (!hasDraft) {
      return;
    }


    note = {
      id: Date.now(),
      title: "Untitled Note",
      content: "",
      createdAt: Date.now(),
      updatedAt: Date.now(),
      pinned: false
    };

    state.customNotes.unshift(note);
    state.currentCustomNoteId = note.id;

    showNoteStatus("New note created and saved");
  }


  note.title =
    noteTitleInput.value.trim() ||
    "Untitled Note";


  note.content =
    customNoteArea.innerHTML;


  note.updatedAt =
    Date.now();


  saveStateToLocal();

}


// ============================================================
// CREATE NOTE
// ============================================================

function createNewCustomNote() {

  saveActiveCustomNote();


  const newNote = {

    id:
      Date.now(),

    title:
      "Untitled Note",

    content:
      "",

    createdAt:
      Date.now(),

    updatedAt:
      Date.now(),

    pinned:
      false

  };


  state.customNotes.unshift(
    newNote
  );


  state.currentCustomNoteId =
    newNote.id;


  saveStateToLocal();


  renderCustomNoteList();

  loadActiveCustomNote();


  if (noteTitleInput) {

    noteTitleInput.focus();

    noteTitleInput.select();

  }

}


// ============================================================
// DELETE NOTE
// ============================================================

async function deleteCustomNote(
  noteId
) {

  const note =
    state.customNotes.find(
      item =>
        item.id ===
        noteId
    );


  if (!note) return;


  const shouldDelete =
    await showCustomConfirm({
      title: "Delete Note",
      message: `Delete "${note.title || "Untitled Note"}"?`,
      confirmText: "Confirm Delete",
      cancelText: "Keep It"
    });


  if (!shouldDelete) {

    return;

  }


  state.customNotes =
    state.customNotes.filter(
      item =>
        item.id !==
        noteId
    );


  if (
    state.currentCustomNoteId ===
    noteId
  ) {

    state.currentCustomNoteId =
      state.customNotes.length
        ? state.customNotes[0].id
        : null;

  }


  saveStateToLocal();

  renderCustomNoteList();

  loadActiveCustomNote();

}


// ============================================================
// NEW NOTE BUTTONS
// ============================================================

safeAddEvent(
  newBlankNoteBtn,
  "click",
  createNewCustomNote
);


safeAddEvent(
  newBlankNoteBtn2,
  "click",
  createNewCustomNote
);


// ============================================================
// SAVE BUTTON
// ============================================================

safeAddEvent(
  saveCustomNoteBtn,
  "click",
  () => {

    saveActiveCustomNote();

    renderCustomNoteList();
    showNoteStatus("Saved");

  }
);


// ============================================================
// PINNED NOTES AND EDITOR ACTIONS
// ============================================================

let noteStatusTimer;


function showNoteStatus(message) {

  const status =
    document.getElementById(
      "noteLastSaved"
    );

  const toast =
    document.getElementById(
      "noteStatusToast"
    );

  if (!status && !toast) return;


  if (status) {
    status.textContent = message;
    status.classList.remove("status-flash");

    requestAnimationFrame(
      () => status.classList.add("status-flash")
    );
  }

  if (toast) {
    toast.textContent = message;
    toast.classList.remove("active");

    requestAnimationFrame(
      () => toast.classList.add("active")
    );
  }

  clearTimeout(noteStatusTimer);

  noteStatusTimer = setTimeout(
    () => {
      if (status) {
        status.textContent = "Saved automatically";
        status.classList.remove("status-flash");
      }

      toast?.classList.remove("active");
    },
    2200
  );
}

function updatePinNoteButton() {

  if (!togglePinNoteBtn) return;


  const note =
    state.customNotes.find(
      item => item.id === state.currentCustomNoteId
    );


  const isPinned =
    note?.pinned === true;


  togglePinNoteBtn.title =
    isPinned ? "Unpin Note" : "Pin Note";

  togglePinNoteBtn.setAttribute(
    "aria-pressed",
    String(isPinned)
  );

  togglePinNoteBtn.classList.toggle(
    "active-tool",
    isPinned
  );
}


function setCustomNoteFilter(filter) {

  customNoteFilter = filter;


  const subtitle =
    document.getElementById(
      "noteListSubtitle"
    );

  if (subtitle) {
    subtitle.textContent =
      filter === "pinned" ? "Pinned" : "All Notes";
  }

  allNotesFolder?.classList.toggle(
    "active-folder",
    filter === "all"
  );

  pinnedNotesFolder?.classList.toggle(
    "active-folder",
    filter === "pinned"
  );

  renderCustomNoteList(
    noteSearchInput?.value || ""
  );
}


safeAddEvent(
  allNotesFolder,
  "click",
  () => setCustomNoteFilter("all")
);


safeAddEvent(
  pinnedNotesFolder,
  "click",
  () => setCustomNoteFilter("pinned")
);


safeAddEvent(
  togglePinNoteBtn,
  "click",
  () => {

    const note =
      state.customNotes.find(
        item => item.id === state.currentCustomNoteId
      );

    if (!note) return;


    note.pinned =
      note.pinned !== true;

    note.updatedAt = Date.now();

    saveStateToLocal();
    updatePinNoteButton();
    showNoteStatus(
      note.pinned ? "Pinned" : "Unpinned"
    );
    renderCustomNoteList(
      noteSearchInput?.value || ""
    );

  }
);


safeAddEvent(
  deleteCurrentNoteBtn,
  "click",
  () => {

    if (state.currentCustomNoteId !== null) {
      deleteCustomNote(state.currentCustomNoteId);
    }

  }
);


// ============================================================
// AUTO SAVE TITLE
// ============================================================

safeAddEvent(
  noteTitleInput,
  "input",
  () => {

    saveActiveCustomNote();

    renderCustomNoteList();

  }
);


// ============================================================
// AUTO SAVE CONTENT
// ============================================================

function attachCustomEditorEvents() {

  if (!customNoteArea) {
    return;
  }


  customNoteArea.addEventListener(
    "input",
    () => {

      saveActiveCustomNote();

      renderCustomNoteList();

    }
  );

}


attachCustomEditorEvents();


// ============================================================
// SEARCH
// ============================================================

const noteSearchInput =
  document.getElementById(
    "noteSearchInput"
  );


safeAddEvent(
  noteSearchInput,
  "input",
  () => {

    renderCustomNoteList(
      noteSearchInput.value
    );

  }
);
