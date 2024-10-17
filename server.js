const express = require('express');
const app = express();
const path = require('path');

// 정적 파일 제공 (HTML, CSS)
app.use(express.static(path.join(__dirname, 'public')));

// 로그인 페이지 라우팅
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 관리자 페이지 라우팅
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// 드라이버 페이지 라우팅
app.get('/driver', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'driver.html'));
});

// 서버 실행
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
