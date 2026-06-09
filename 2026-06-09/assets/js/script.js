    // ========== DATA ==========
    let data = {
      subjects: [],
      targetAverage: 2.5
    };

    // ========== HELPER FUNCTIONS ==========
    function calculateAverage(grades) {
      if (grades.length === 0) return 0;
      const sum = grades.reduce((a, b) => a + b, 0);
      return sum / grades.length;
    }

    function calculateWeightedAverage(subjects) {
      if (subjects.length === 0) return 0;
      const total = subjects.reduce((sum, subject) => {
        const avg = calculateAverage(subject.grades);
        return sum + avg * subject.weight;
      }, 0);
      const totalWeight = subjects.reduce((sum, s) => sum + s.weight, 0);
      return total / totalWeight;
    }

    function getAverageColor(avg) {
      if (avg <= 1.5) return 'avg-green';
      if (avg <= 2.5) return 'avg-yellow';
      if (avg <= 3.5) return 'avg-orange';
      return 'avg-red';
    }

    function getAverageStatus(avg) {
      if (avg <= 1.5) return { label: 'Výborne', class: 'status-excellent' };
      if (avg <= 2.5) return { label: 'V poriadku', class: 'status-good' };
      if (avg <= 3.5) return { label: 'Treba zapracovať', class: 'status-needs-work' };
      return { label: 'Zle', class: 'status-bad' };
    }

    function getGradeClass(grade) {
      return `grade-tag grade-${grade}`;
    }

    // ========== LOCAL STORAGE ==========
    function saveData() {
      localStorage.setItem('gradeVisualizerData', JSON.stringify(data));
    }

    function loadData() {
      const saved = localStorage.getItem('gradeVisualizerData');
      if (saved) {
        data = JSON.parse(saved);
      }
    }

    // ========== RENDER FUNCTIONS ==========
    function renderSubjectCard(subject) {
      const avg = calculateAverage(subject.grades);
      const colorClass = getAverageColor(avg);
      const barWidth = Math.min(avg * 20, 100);

      let gradesHTML = '';
      subject.grades.forEach((grade, index) => {
        gradesHTML += `
          <span class="${getGradeClass(grade)}">
            ${grade}
            <button class="delete-grade" onclick="deleteGrade('${subject.id}', ${index})">✕</button>
          </span>
        `; const tbody = document.getElementById('subjectsTableBody');
      const sorted = [...data.subjects].sort((a, b) => {
        let aVal, bVal;

        switch (key) {
          case 'name':
            aVal = a.name.toLowerCase();
            bVal = b.name.toLowerCase();
            return sortConfig.direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
          case 'weight':
            aVal = a.weight;
            bVal = b.weight;
            break;
          case 'count':
            aVal = a.grades.length;
            bVal = b.grades.length;
            break;
          case 'average':
            aVal = calculateAverage(a.grades);
            bVal = calculateAverage(b.grades);
            break;
          default:
            return 0;
        }

        return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
      });

      tbody.innerHTML = sorted.map(subject => {
        const avg = calculateAverage(subject.grades);
        const colorClass = getAverageColor(avg).replace('avg', 'text');
        return `
          <tr>
            <td>${subject.name}</td>
            <td>${subject.weight}</td>
            <td>${subject.grades.length}</td>
            <td><span class="${colorClass}">${avg.toFixed(2)}</span></td>
          </tr>
        `;
      }).join('');

      // Update sort indicators
      document.querySelectorAll('th').forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
        if (th.dataset.sort === key) {
          th.classList.add(`sorted-${sortConfig.direction}`);
        }
      });
    }

    // ========== EVENT HANDLERS ==========
    function addSubject(name, weight) {
      data.subjects.push({
        id: Date.now().toString(),
        name,
        weight: parseInt(weight),
        grades: []
      });
      saveData();
      renderAll();
    }

    function addGrade(subjectId, grade) {
      if (!grade) return;
      const subject = data.subjects.find(s => s.id === subjectId);
      if (subject) {
        subject.grades.push(parseInt(grade));
        saveData();
        renderAll();
      }
    }

    function deleteGrade(subjectId, index) {
      const subject = data.subjects.find(s => s.id === subjectId);
      if (subject) {
        subject.grades.splice(index, 1);
        saveData();
        renderAll();
      }
    }

    function deleteSubject(subjectId) {
      data.subjects = data.subjects.filter(s => s.id !== subjectId);
      saveData();
      renderAll();
    }

    function setTargetAverage(value) {
      data.targetAverage = parseFloat(value) || 0;
      saveData();
      renderSummary();
    }

    // ========== INITIALIZATION ==========
    document.addEventListener('DOMContentLoaded', () => {
      loadData();

      // Set target input value
      document.getElementById('targetInput').value = data.targetAverage;

      // Add subject form
      document.getElementById('addSubjectForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('subjectName').value.trim();
        const weight = document.getElementById('subjectWeight').value;
        if (name) {
          addSubject(name, weight);
          e.target.reset();
        }
      });

      // Target input
      document.getElementById('targetInput').addEventListener('change', (e) => {
        setTargetAverage(e.target.value);
      });

      // Table sorting
      document.querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
          sortTable(th.dataset.sort);
        });
      });

      // Initial render
      renderAll();
    });
      });

      return `
        <div class="card subject-card" data-id="${subject.id}">
          <div class="subject-header">
            <div>
              <div class="subject-name">${subject.name}<span class="subject-weight">Váha: ${subject.weight}</span></div>
            </div>
            <button class="delete-subject" onclick="deleteSubject('${subject.id}')">🗑️</button>
          </div>
          <div class="grades-container">
            ${gradesHTML || '<span style="color: var(--gray);">Žiadne známky</span>'}
          </div>
          <div style="margin-bottom: 1rem;">
            <select class="add-grade-select" onchange="addGrade('${subject.id}', this.value); this.value='';">
              <option value="" disabled selected>Pridať známku</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <div class="average-display">
            <span class="average-label">Priemer:</span>
            <div class="average-bar">
              <div class="average-bar-fill ${colorClass}" style="width: ${barWidth}%;"></div>
            </div>
            <span class="average-value ${colorClass.replace('avg', 'text')}">${avg.toFixed(2)}</span>
          </div>
        </div>
      `;
    }

    function renderSubjectCards() {
      const container = document.getElementById('subjectsContainer');
      if (data.subjects.length === 0) {
        container.innerHTML = '';
        return;
      }
      container.innerHTML = data.subjects.map(renderSubjectCard).join('');
    }

    function renderSummary() {
      const summary = document.getElementById('summary');
      const weightedAvg = calculateWeightedAverage(data.subjects);
      const diff = weightedAvg - data.targetAverage;
      const status = getAverageStatus(weightedAvg);
      const progress = (weightedAvg / 5) * 100;

      document.getElementById('weightedAverage').textContent = weightedAvg.toFixed(2);
      document.getElementById('status').innerHTML = `<span class="${status.class}">${status.label}</span>`;
      document.getElementById('difference').textContent = (diff >= 0 ? '+' : '') + diff.toFixed(2);
      document.getElementById('comparisonText').textContent = `Si ${diff >= 0 ? 'nad' : 'pod'} svojím cieľom 🎯`;
      document.getElementById('progressFill').style.width = `${Math.min(progress, 100)}%`;

      summary.style.display = 'block';
    }

    function renderTable() {
      const tbody = document.getElementById('subjectsTableBody');
      const container = document.getElementById('tableContainer');
      
      if (data.subjects.length === 0) {
        container.style.display = 'none';
        return;
      }

      tbody.innerHTML = data.subjects.map(subject => {
        const avg = calculateAverage(subject.grades);
        const colorClass = getAverageColor(avg).replace('avg', 'text');
        return `
          <tr>
            <td>${subject.name}</td>
            <td>${subject.weight}</td>
            <td>${subject.grades.length}</td>
            <td><span class="${colorClass}">${avg.toFixed(2)}</span></td>
          </tr>
        `;
      }).join('');

      container.style.display = 'block';
    }

    function renderStatistics() {
      const stats = document.getElementById('statistics');
      const grid = document.getElementById('statsGrid');
      
      if (data.subjects.length === 0) {
        stats.style.display = 'none';
        return;
      }

      const allGrades = data.subjects.flatMap(s => s.grades);
      const count1 = allGrades.filter(g => g === 1).length;
      const count5 = allGrades.filter(g => g === 5).length;

      const subjectAverages = data.subjects.map(s => ({
        name: s.name,
        avg: calculateAverage(s.grades)
      }));

      const bestSubject = subjectAverages.reduce((a, b) => a.avg < b.avg ? a : b);
      const worstSubject = subjectAverages.reduce((a, b) => a.avg > b.avg ? a : b);

      grid.innerHTML = `
        <div class="stat-item green">
          <span class="stat-icon">🏆</span>
          <div class="stat-content">
            <span class="stat-label">Najlepší predmet</span>
            <span class="stat-value">${bestSubject.name} (${bestSubject.avg.toFixed(2)})</span>
          </div>
        </div>
        <div class="stat-item red">
          <span class="stat-icon">⚠️</span>
          <div class="stat-content">
            <span class="stat-label">Najhorší predmet</span>
            <span class="stat-value">${worstSubject.name} (${worstSubject.avg.toFixed(2)})</span>
          </div>
        </div>
        <div class="stat-item blue">
          <span class="stat-icon">📈</span>
          <div class="stat-content">
            <span class="stat-label">Počet jednotiek</span>
            <span class="stat-value">${count1}</span>
          </div>
        </div>
        <div class="stat-item orange">
          <span class="stat-icon">📉</span>
          <div class="stat-content">
            <span class="stat-label">Počet päťok</span>
            <span class="stat-value">${count5}</span>
          </div>
        </div>
      `;

      stats.style.display = 'block';
    }

    function renderAll() {
      renderSubjectCards();
      renderSummary();
      renderTable();
      renderStatistics();
      
      const emptyState = document.getElementById('emptyState');
      emptyState.style.display = data.subjects.length === 0 ? 'block' : 'none';
    }

    // ========== TABLE SORTING ==========
    let sortConfig = { key: null, direction: 'asc' };

    function sortTable(key) {
      if (sortConfig.key === key) {
        sortConfig.direction = sortConfig.direction === 'asc' ? 'desc' : 'asc';
      } else {
        sortConfig = { key, direction: 'asc' };
      }

      const tbody = document.getElementById('subjectsTableBody');
      const sorted = [...data.subjects].sort((a, b) => {
        let aVal, bVal;

        switch (key) {
          case 'name':
            aVal = a.name.toLowerCase();
            bVal = b.name.toLowerCase();
            return sortConfig.direction === 'asc' ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
          case 'weight':
            aVal = a.weight;
            bVal = b.weight;
            break;
          case 'count':
            aVal = a.grades.length;
            bVal = b.grades.length;
            break;
          case 'average':
            aVal = calculateAverage(a.grades);
            bVal = calculateAverage(b.grades);
            break;
          default:
            return 0;
        }

        return sortConfig.direction === 'asc' ? aVal - bVal : bVal - aVal;
      });

      tbody.innerHTML = sorted.map(subject => {
        const avg = calculateAverage(subject.grades);
        const colorClass = getAverageColor(avg).replace('avg', 'text');
        return `
          <tr>
            <td>${subject.name}</td>
            <td>${subject.weight}</td>
            <td>${subject.grades.length}</td>
            <td><span class="${colorClass}">${avg.toFixed(2)}</span></td>
          </tr>
        `;
      }).join('');

      // Update sort indicators
      document.querySelectorAll('th').forEach(th => {
        th.classList.remove('sorted-asc', 'sorted-desc');
        if (th.dataset.sort === key) {
          th.classList.add(`sorted-${sortConfig.direction}`);
        }
      });
    }

    // ========== EVENT HANDLERS ==========
    function addSubject(name, weight) {
      data.subjects.push({
        id: Date.now().toString(),
        name,
        weight: parseInt(weight),
        grades: []
      });
      saveData();
      renderAll();
    }

    function addGrade(subjectId, grade) {
      if (!grade) return;
      const subject = data.subjects.find(s => s.id === subjectId);
      if (subject) {
        subject.grades.push(parseInt(grade));
        saveData();
        renderAll();
      }
    }

    function deleteGrade(subjectId, index) {
      const subject = data.subjects.find(s => s.id === subjectId);
      if (subject) {
        subject.grades.splice(index, 1);
        saveData();
        renderAll();
      }
    }

    function deleteSubject(subjectId) {
      data.subjects = data.subjects.filter(s => s.id !== subjectId);
      saveData();
      renderAll();
    }

    function setTargetAverage(value) {
      data.targetAverage = parseFloat(value) || 0;
      saveData();
      renderSummary();
    }

    // ========== INITIALIZATION ==========
    document.addEventListener('DOMContentLoaded', () => {
      loadData();

      // Set target input value
      document.getElementById('targetInput').value = data.targetAverage;

      // Add subject form
      document.getElementById('addSubjectForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('subjectName').value.trim();
        const weight = document.getElementById('subjectWeight').value;
        if (name) {
          addSubject(name, weight);
          e.target.reset();
        }
      });

      // Target input
      document.getElementById('targetInput').addEventListener('change', (e) => {
        setTargetAverage(e.target.value);
      });

      // Table sorting
      document.querySelectorAll('th[data-sort]').forEach(th => {
        th.addEventListener('click', () => {
          sortTable(th.dataset.sort);
        });
      });

      // Initial render
      renderAll();
    });