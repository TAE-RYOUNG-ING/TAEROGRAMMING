package taerogramming.ex.service;
import java.util.List;
import org.springframework.stereotype.Service;

import taerogramming.ex.vo.ExVO;
import taerogramming.ex.vo.PageVO;



public interface ExService {

	// 1. 맛집 리스트
	public List<ExVO> getList() throws Exception;
	
	// 2. 맛집 등록
	public void regist(ExVO vo) throws Exception;
	
	// 3. 특정 맛집 정보 조회
	public ExVO getInfo(Integer num) throws Exception;
	
	// 4. 특정 맛집 수정
	public void updateInfo(ExVO vo) throws Exception;
	
	// 5. 특정 맛집 삭제
	public void removeInfo(Integer num) throws Exception;
	
	// 6. 맛집 리스트 조회
	public List<ExVO> getListPage(PageVO vo) throws Exception;
}
