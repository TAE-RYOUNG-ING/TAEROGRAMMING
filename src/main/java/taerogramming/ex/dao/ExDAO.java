package taerogramming.ex.dao;
import java.util.List;
import org.springframework.stereotype.Repository;

import taerogramming.ex.vo.ExVO;



public interface ExDAO {

	// 리스트
	public List<ExVO> readList() throws Exception;
	
	// 등록
	public void insert(ExVO vo) throws Exception;
	
}
