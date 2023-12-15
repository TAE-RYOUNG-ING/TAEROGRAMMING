package taerogramming.ex.vo;



public class PageMaker {
// 하단부 페이징처리
	
	
	private int totalCount;		// 전체 글의 개수
	private int startPage;		// 페이지 시작 번호
	private int endPage;		// 페이지 끝 번호
	private boolean prev;		// 이전
	private boolean next;		// 다음
	
	private int pageBlock = 5;	// 페이지 블럭의 수
	
//	private int page;			// 페이지 번호
//	private int pageSize;		// 페이지 크기0
	private PageVO pageVO;		// 이미 생성해놓은 객체 활용
	
	
	public void setPageVO(PageVO pageVO) {
		this.pageVO = pageVO;
	}
	
	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
		// DB에서 계산된 정보 가져오기
		calcMyPage();
	}
	// 페이징처리 하단 필요한 정보 계산
	public void calcMyPage() {
	
		// 1-1. 끝 페이지 번호 생성
		endPage = (int)(Math.ceil(pageVO.getPage()/(double)pageBlock) * pageBlock);
		// 2. 시작페이지 번호 생성
		startPage = (endPage - pageBlock) + 1;
		// 3. 실제 마지막 페이지번호
		int tmpEndPage = (int)(Math.ceil(totalCount / (double)pageVO.getPageSize()));	
		if(endPage > tmpEndPage) {
			endPage = tmpEndPage;
		}	
		// 4. 이전 버튼
		prev = startPage != 1;	// 1이 아닐 때 true, 맞으면 false로 해석 가능
		// 5. 다음 버튼
		next = (endPage * pageVO.getPageSize() >= totalCount)? false : true;
	}
	
	
	
	
	
	// ㅡㅡㅡㅡㅡㅡ Getter & Setter ㅡㅡㅡㅡㅡㅡ
	public int getTotalCount() {
		return totalCount;
	}

	public int getStartPage() {
		return startPage;
	}

	public int getEndPage() {
		return endPage;
	}

	public boolean isPrev() {
		return prev;
	}

	public boolean isNext() {
		return next;
	}

	public int getPageBlock() {
		return pageBlock;
	}

	public PageVO getPageVO() {
		return pageVO;
	}

	public void setStartPage(int startPage) {
		this.startPage = startPage;
	}

	public void setEndPage(int endPage) {
		this.endPage = endPage;
	}

	public void setPrev(boolean prev) {
		this.prev = prev;
	}

	public void setNext(boolean next) {
		this.next = next;
	}

	public void setPageBlock(int pageBlock) {
		this.pageBlock = pageBlock;
	}

	
	
	

	
	
	
}
