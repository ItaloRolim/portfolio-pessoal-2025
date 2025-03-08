document.addEventListener('DOMContentLoaded', function() {
    // Dados do projeto atual
    const currentProject = {
        title: "App de Gerenciamento Financeiro",
        description: "Aplicação web para controle financeiro pessoal com dashboard interativo, categorização automática de despesas e relatórios personalizados.",
        image: "imagens/projeto-websoft.png",  // Corrigido o caminho da imagem
        technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
        currentStage: "Desenvolvimento Frontend",
        progress: 65,
        repositoryUrl: "https://github.com/ItaloRolim/finance-app",  // Substitua pela URL real
        stages: [
            { name: "Planejamento e Design", status: "completed" },
            { name: "Configuração da Infraestrutura", status: "completed" },
            { name: "Desenvolvimento Frontend", status: "current" },
            { name: "Desenvolvimento Backend", status: "pending" },
            { name: "Testes e Lançamento", status: "pending" }
        ],
        updates: [
            { 
                date: "05 de março, 2025", 
                text: "Implementação da interface de visualização de relatórios financeiros concluída.",
                icon: "code",
                color: "blue"
            },
            { 
                date: "28 de fevereiro, 2025", 
                text: "Integração do sistema de autenticação e segurança dos dados do usuário.",
                icon: "cogs",
                color: "purple"
            }
        ]
    };


    // Atualizar elementos da página com os dados do projeto
    document.getElementById('project-title').textContent = currentProject.title;
    document.getElementById('project-description').textContent = currentProject.description;
    document.getElementById('project-image').src = currentProject.image;
    document.getElementById('current-stage').textContent = currentProject.currentStage;
    document.getElementById('progress-percentage').textContent = `${currentProject.progress}%`;
    document.getElementById('progress-bar').style.width = `${currentProject.progress}%`;
    
    // Configurar botão de repositório
    const repoButton = document.getElementById('view-repository');
    if (repoButton) {
        repoButton.addEventListener('click', function() {
            window.open(currentProject.repositoryUrl, '_blank');
        });
    }

    // Renderizar tecnologias
    const techContainer = document.getElementById('project-technologies');
    techContainer.innerHTML = '';
    currentProject.technologies.forEach(tech => {
        const span = document.createElement('span');
        span.className = 'px-3 py-1 bg-blue-900 text-blue-300 rounded-full text-xs';
        span.textContent = tech;
        techContainer.appendChild(span);
    });

    // Renderizar atualizações
    const updatesContainer = document.getElementById('project-updates');
    updatesContainer.innerHTML = '';
    currentProject.updates.forEach(update => {
        const updateDiv = document.createElement('div');
        updateDiv.className = 'flex';
        
        updateDiv.innerHTML = `
            <div class="mr-4 flex-shrink-0">
                <div class="w-10 h-10 rounded-full bg-${update.color}-600 flex items-center justify-center">
                    <i class="fas fa-${update.icon} text-white"></i>
                </div>
            </div>
            <div>
                <p class="text-sm text-gray-400">${update.date}</p>
                <p class="text-gray-300">${update.text}</p>
            </div>
        `;
        
        updatesContainer.appendChild(updateDiv);
    });

    // Animação de entrada
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });
});

// Função para atualizar facilmente o progresso do projeto
function updateProjectProgress(newProgress, newStage) {
    document.getElementById('current-stage').textContent = newStage;
    document.getElementById('progress-percentage').textContent = `${newProgress}%`;
    
    // Animação suave da barra de progresso
    const progressBar = document.getElementById('progress-bar');
    progressBar.style.width = '0%';
    
    setTimeout(() => {
        progressBar.style.width = `${newProgress}%`;
    }, 100);
}

// Função para adicionar uma nova atualização
function addProjectUpdate(date, text, icon = 'code', color = 'blue') {
    const updatesContainer = document.getElementById('project-updates');
    const updateDiv = document.createElement('div');
    updateDiv.className = 'flex';
    
    updateDiv.innerHTML = `
        <div class="mr-4 flex-shrink-0">
            <div class="w-10 h-10 rounded-full bg-${color}-600 flex items-center justify-center">
                <i class="fas fa-${icon} text-white"></i>
            </div>
        </div>
        <div>
            <p class="text-sm text-gray-400">${date}</p>
            <p class="text-gray-300">${text}</p>
        </div>
    `;
    
    // Adicionar no topo
    updatesContainer.insertBefore(updateDiv, updatesContainer.firstChild);
    
    // Animar entrada
    updateDiv.style.opacity = '0';
    updateDiv.style.transform = 'translateY(20px)';
    setTimeout(() => {
        updateDiv.style.transition = 'all 0.5s ease';
        updateDiv.style.opacity = '1';
        updateDiv.style.transform = 'translateY(0)';
    }, 100);
}