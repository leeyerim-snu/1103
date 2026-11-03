import './style.css'

const notes = {
  intro: {
    tag: 'TEACHER PROFILE',
    title: '안녕하세요, 이예림입니다.',
    body: '<p>빛나는 1%의 가능성을 믿어주는 초등교사입니다.</p><p>아이들 안에 이미 있는 빛나는 자원을 발견하고, 다양한 경험을 통해 각자의 세계를 넓혀 가는 배움을 만들고 싶습니다.</p>',
  },
  philosophy: {
    tag: 'MY CLASSROOM',
    title: '교실에서 중요하게 생각하는 것',
    body: '<ul><li>아이들 안의 가능성을 발견하고 키우기</li><li>다양한 경험으로 자신의 세계 넓히기</li><li>독서와 체육으로 지덕체를 고르게 기르기</li></ul>',
  },
  study: {
    tag: 'STUDY · AI & EDUCATION',
    title: '서울대학교 AI 융합교육학과',
    body: '<p>서울대학교 AI 융합교육학과 재학 중</p><p class="dialog-note">AI와 디지털 도구를 활용한 수업에 관심을 두고 공부하고 있습니다.</p>',
  },
  art: {
    tag: 'TEACHING · ART',
    title: '성동광진교육지원청 미술 영재 강사',
    body: '<p>2024–2026 성동광진교육지원청 미술 영재 강사</p><p class="dialog-note">수업 활동과 프로젝트 내용을 이곳에 더 기록할 수 있어요.</p>',
  },
  interests: {
    tag: 'CURRENT INTERESTS',
    title: '관심사',
    body: '<ul><li>AI와 디지털 도구를 활용한 수업</li><li>미술 영재 교육과 창의적 표현</li><li>따뜻하고 단단한 학급 운영</li></ul>',
  },
}

document.querySelector('#app').innerHTML = `
  <header class="topbar">
    <a class="brand" href="#top" aria-label="이예림 교실 홈"><span class="brand-icon">YR</span><span>YERIM’S CLASSROOM</span></a>
    <span class="top-status"><i></i> CLASS IS IN SESSION</span>
  </header>
  <main id="top" class="page-shell">
    <section class="intro-block" aria-labelledby="main-title">
      <p class="eyebrow">WELCOME TO MY CLASSROOM</p>
      <h1 id="main-title">내 안의 빛나는 1%의 가능성을<br class="desktop-break"> 믿어주는 교사 <span>이예림</span></h1>
      <p class="intro-hint">교실을 둘러보고 게시판의 글을 눌러 보세요!</p>
    </section>

    <section class="classroom" aria-label="클릭해서 둘러보는 픽셀 교실">
      <div class="wall-top"><span>오늘도 반짝이는 하루!</span><span class="wall-date">OUR CLASS · 2026</span></div>
      <div class="room-window" aria-hidden="true"><span class="sun"></span><span class="cloud cloud-one"></span><span class="cloud cloud-two"></span><span class="hill"></span></div>

      <section class="board board-left" aria-labelledby="about-board-title">
        <div class="board-frame"><div class="board-face">
          <h2 id="about-board-title"><span class="pin pin-yellow"></span> 나를 소개해요</h2>
          <button class="notice" data-note="intro"><span class="notice-icon">✎</span><span><b>선생님 소개</b><small>어떤 교사인지 살펴보기</small></span><i>↗</i></button>
          <button class="notice" data-note="philosophy"><span class="notice-icon">♡</span><span><b>나의 교육 철학</b><small>교실에서 소중히 여기는 것</small></span><i>↗</i></button>
        </div></div>
        <span class="board-label">ABOUT ME</span>
      </section>

      <div class="teacher-zone" aria-label="교실 가운데 서 있는 이예림 선생님">
        <div class="speech-bubble">안녕!<br>반가워요</div>
        <div class="teacher-sprite" aria-hidden="true">
          <span class="sprite-shadow"></span><span class="sprite-hair"></span><span class="sprite-face"><i class="eye eye-left"></i><i class="eye eye-right"></i><i class="smile"></i></span><span class="sprite-neck"></span><span class="sprite-body"><i class="collar collar-left"></i><i class="collar collar-right"></i><i class="pocket"></i></span><span class="sprite-arm arm-left"></span><span class="sprite-arm arm-right"></span><span class="sprite-skirt"></span><span class="sprite-leg leg-left"></span><span class="sprite-leg leg-right"></span><span class="sprite-shoe shoe-left"></span><span class="sprite-shoe shoe-right"></span>
        </div>
        <span class="teacher-name">이예림 선생님</span>
      </div>

      <section class="board board-right" aria-labelledby="work-board-title">
        <div class="board-frame"><div class="board-face">
          <h2 id="work-board-title"><span class="pin pin-pink"></span> 수업과 연구 기록</h2>
          <button class="notice" data-note="study"><span class="notice-icon">✦</span><span><b>AI 융합교육 공부</b><small>서울대학교 재학 중</small></span><i>↗</i></button>
          <button class="notice" data-note="art"><span class="notice-icon">▧</span><span><b>미술 영재 수업</b><small>성동광진교육지원청 · 2024–26</small></span><i>↗</i></button>
          <button class="notice notice-last" data-note="interests"><span class="notice-icon">☼</span><span><b>요즘의 관심사</b><small>더 알아보고 싶은 주제들</small></span><i>↗</i></button>
        </div></div>
        <span class="board-label">CLASS NOTES</span>
      </section>

      <div class="floor-line" aria-hidden="true"></div>
      <div class="room-plants plant-left" aria-hidden="true"><i></i><i></i><i></i><b></b></div>
      <div class="room-books" aria-hidden="true"><i></i><i></i><i></i><i></i></div>
      <p class="game-prompt"><span class="prompt-key">CLICK</span> 게시판 메모를 선택하면 자세히 볼 수 있어요</p>
    </section>

    <footer id="contact" class="contact-bar"><div><span class="footer-label">CONTACT</span><a href="mailto:li2060@sen.go.kr">li2060@sen.go.kr <b>↗</b></a></div><span class="footer-note">오늘도 아이들의 가능성을 응원합니다.</span></footer>
  </main>

  <dialog class="note-dialog" aria-labelledby="dialog-title">
    <div class="dialog-top"><span class="dialog-tag"></span><button class="dialog-close" type="button" aria-label="닫기">×</button></div>
    <h2 id="dialog-title"></h2><div class="dialog-body"></div>
    <div class="dialog-bottom"><span>YERIM’S CLASSROOM</span><span>✦</span></div>
  </dialog>
`

const dialog = document.querySelector('.note-dialog')
const dialogTitle = dialog.querySelector('#dialog-title')
const dialogTag = dialog.querySelector('.dialog-tag')
const dialogBody = dialog.querySelector('.dialog-body')

document.querySelectorAll('[data-note]').forEach((button) => {
  button.addEventListener('click', () => {
    const note = notes[button.dataset.note]
    dialogTag.textContent = note.tag
    dialogTitle.textContent = note.title
    dialogBody.innerHTML = note.body
    dialog.showModal()
  })
})

dialog.querySelector('.dialog-close').addEventListener('click', () => dialog.close())
dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close()
})
