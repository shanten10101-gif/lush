// section_01 <collaboration> tap 인터렉션 // 
document.addEventListener('DOMContentLoaded', function () {

  // 탭별 이미지 경로 설정 (실제 파일명에 맞게 수정하세요)
  const tabImages = [
    'images/collaboration_01_img.png',  // 지금 인기 급상승 중
    'images/collaboration_02_img.jpg',  // 슈퍼마리오 갤럭시 무비
    'images/collaboration_03_img.jpg',  // 패딩턴
    'images/collaboration_04_img.jpg',  // 위키드 포 굿
    'images/collaboration_05_img.jpg',  // 스쿠비 두
    'images/collaboration_06_img.jpg',  // 헬로키티와 친구들
    'images/collaboration_07_img.jpg',  // 미니언즈
  ];

  const tabs = document.querySelectorAll('.collaboration_tap_wrap ul li a');
  const imgBox = document.querySelector('.collaboration_img');

  tabs.forEach(function (tab, index) {
    tab.addEventListener('click', function (e) {
      e.preventDefault();

      // 활성 탭 스타일 처리 (선택한 탭에 active 클래스 추가)
      tabs.forEach(function (t) {
        t.classList.remove('active');
      });
      tab.classList.add('active');

      // 이미지 페이드 전환
      imgBox.style.transition = 'opacity 0.3s ease';
      imgBox.style.opacity = '0';

      setTimeout(function () {
        imgBox.style.backgroundImage = "url('" + tabImages[index] + "')";
        imgBox.style.opacity = '1';
      }, 300);
    });
  });
});