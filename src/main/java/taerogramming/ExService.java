package taerogramming;
import java.util.List;
import org.springframework.stereotype.Service;



public interface ExService {

	// 리스트 출력
	public List<ExVO> getList() throws Exception;
	
	// 등록
	public void regist(ExVO vo) throws Exception;
	
}
