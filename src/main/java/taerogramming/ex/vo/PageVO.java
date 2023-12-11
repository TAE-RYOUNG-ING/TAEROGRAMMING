package taerogramming.ex.vo;

import org.springframework.stereotype.Component;

@Component
// 혹은 @Bean 근데 왜 없지..?
public class PageVO {

	private int page;		// 페이지 정보
	private int pageSize;   // 한 페이지에 출력될 크기
	// 기본생성자
	public PageVO() {
		// 페이징처리의 기본값 설정
		this.page = 1;
		this.pageSize = 5;
	}

	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ Setter ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	// 기본값 세팅해 줄 수 있음
	public void setPage(int page) {
		// 페이지 정보가 0 또는 -값이라면 기본값 세팅
		if(page <= 0) {
			this.page = 1;
			return;
		}
		this.page = page;
	}

	public void setPageSize(int pageSize) {
		// 페이지 크기가 0 또는 -값 또는 100 이상이라면 기본값 세팅 
		if(pageSize <= 0 || pageSize > 100) {
			this.pageSize = 10;
			return;
		}
		this.pageSize = pageSize;
	}
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ Getter ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	// mapper에서 #{ }의 값을 getter를 통해서 들고옴
	public int getPage() {
		return page;
	}

	public int getPageSize() {
		return pageSize;
	}
	
	// 페이지에 따른 시작 "인덱스" 계산
	// -> mapper에서만 사용되는 메서드
	public int getStartPage() {
		return (this.page -1) * this.pageSize;
		// pageSize가 10일때, 2번째 페이지의 시작번호는 11인데 인덱스는 10.
	}

}
