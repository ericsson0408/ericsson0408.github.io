// 目標日期
const targetDates = {
    clerk: new Date('2025-05-09T17:00:00+08:00'),
    japan: new Date('2025-05-13T02:10:00+08:00'),
    exam: new Date('2025-06-21T09:00:00+08:00')
};

// 儲存上一次的數值
const previousValues = {
    clerk: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    japan: { days: 0, hours: 0, minutes: 0, seconds: 0 },
    exam: { days: 0, hours: 0, minutes: 0, seconds: 0 }
};

// 更新倒數計時
function updateCountdown() {
    const now = new Date();

    // 更新每個倒數計時器
    Object.keys(targetDates).forEach(event => {
        const targetDate = targetDates[event];
        const timeLeft = targetDate - now;

        if (timeLeft <= 0) {
            updateFlipCard(event, 'days', 0);
            updateFlipCard(event, 'hours', 0);
            updateFlipCard(event, 'minutes', 0);
            updateFlipCard(event, 'seconds', 0);
            return;
        }

        // 計算剩餘時間
        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        // 更新顯示
        updateFlipCard(event, 'days', days);
        updateFlipCard(event, 'hours', hours);
        updateFlipCard(event, 'minutes', minutes);
        updateFlipCard(event, 'seconds', seconds);
    });
}

// 更新翻牌效果
function updateFlipCard(event, unit, newValue) {
    const card = document.getElementById(`${event}-${unit}-card`);
    const front = card.querySelector('.flip-card-front');
    const back = card.querySelector('.flip-card-back');
    
    // 如果數值改變，執行翻牌動畫
    if (previousValues[event][unit] !== newValue) {
        // 更新背面數字
        back.textContent = newValue;
        
        // 添加翻牌類
        card.classList.add('flip');
        
        // 動畫結束後更新正面數字並移除翻牌類
        setTimeout(() => {
            front.textContent = newValue;
            card.classList.remove('flip');
        }, 800); // 與 CSS 中的 transition 時間一致
        
        // 更新上一次的數值
        previousValues[event][unit] = newValue;
    }
}

// 每秒更新一次
updateCountdown();
setInterval(updateCountdown, 1000); 