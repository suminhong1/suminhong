const MatchingBoard = () => {
  return (
    <>
      <h1>매칭 찾기</h1>
      <div class="main-content">
        <nav>
          <a href="#" class="active">
            전체
          </a>
          <a href="#">쇼핑</a>
          <a href="#">음악</a>
          <a href="#">쇼핑</a>
          <a href="#">음악</a>
          <a href="#">쇼핑</a>
          <a href="#">음악</a>
        </nav>
        <section>
          <div class="post-board">
            <div class="post-board-header">
              <div class="profile-like">
                <div class="profile-image">
                  <img src="img/login.png" />
                </div>
                <button class="like">
                  <img src="img/like.png" />
                </button>
              </div>
              <div class="title-nickname">
                <div class="title">글제목</div>
                <div class="nickname">작성자 닉네임</div>
              </div>
              <div class="post-image">
                <img src="" alt="사진" />
              </div>
              <div class="post-image">
                <img src="" alt="사진" />
              </div>
              <div class="post-time">
                <div class="time">작성 날짜 시간</div>
                <div class="image">
                  <div class="post-image">
                    <img src="" alt="사진" />
                  </div>
                </div>
              </div>
            </div>
            <div class="write-board">
              <div class="write">
                글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글
                작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성
                내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성
                내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성
                내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성
                내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성
                내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성
                내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용글 작성
                내용글 작성 내용글 작성 내용글 작성 내용글 작성 내용
                <a href="#" class="comment-count">
                  <img src="img/comment.png" alt="comment" />
                  <div class="count">0</div>
                </a>
              </div>
            </div>
            <div class="post-tag">
              <div class="tag">태그</div>
              <div class="place">원하는 매칭 지역</div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default MatchingBoard;
