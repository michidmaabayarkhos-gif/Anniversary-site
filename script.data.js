// Үерхэж эхэлсэн огноогоо энд оруулаарай (Сар нь 0-ээс эхэлдэг тул 9-р сар бол 8 гэж бичнэ, эсвэл энгийнээр бичиж болно)
const startDate = new Date("2026-09-15T00:00:00"); 

function updateTimer() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById("timer").innerText = 
        `${days} өдөр, ${hours} цаг, ${minutes} минут, ${seconds} секунд`;
}

setInterval(updateTimer, 1000);
updateTimer();