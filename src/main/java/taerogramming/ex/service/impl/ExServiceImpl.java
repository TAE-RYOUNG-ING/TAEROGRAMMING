package taerogramming.ex.service.impl;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import egovframework.com.cmm.service.impl.EgovComAbstractDAO;
import taerogramming.ex.dao.impl.ExDAOImpl;
import taerogramming.ex.service.ExService;
import taerogramming.ex.vo.ExVO;
import taerogramming.ex.vo.PageVO;



@Service
public class ExServiceImpl implements ExService {

	
	// 로거
	private static final Logger logger = LoggerFactory.getLogger(ExServiceImpl.class);
	
	// 객체 주입
	@Autowired
	private ExDAOImpl edao;
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메서드 정의ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	
	// 1-1. 맛집 리스트
	@Override
	public List<ExVO> getList() throws Exception {
		logger.info("&&&&&&&&&& getList() 호출");
		return edao.readList();
	}
	
	// 1-2. 맛집 리스트 (페이징 처리_read)
	@Override
	public List<ExVO> readListPage(Integer page) throws Exception {
		logger.info("&&&&&&&&&& readListPage(page) 호출");
		return edao.readListPage(page);
	}
	
	// 1-3. 맛집 리스트 (페이징 처리_get)
	@Override
	public List<ExVO> getListPage(PageVO pvo) throws Exception {
		logger.info("&&&&&&&&&& getListPage(pvo) 호출");
		return edao.getListPage(pvo);
	}

	// 2. 맛집 등록
	@Override
	public void regist(ExVO vo) throws Exception {
		logger.info("&&&&&&&&&& regist(vo) 호출");
		edao.insert(vo);
	}

	// 3. 특정 맛집 정보 조회
	@Override
	public ExVO getInfo(Integer num) throws Exception {
		logger.info("&&&&&&&&&& getInfo(num) 호출");
		return edao.getInfo(num);
	}

	// 4. 특정 맛집 수정
	@Override
	public void updateInfo(ExVO vo) throws Exception {
		logger.info("&&&&&&&&&& updateInfo(vo) 호출");
		edao.updateInfo(vo);
	}

	// 5. 특정 맛집 삭제
	@Override
	public void removeInfo(Integer num) throws Exception {
		logger.info("&&&&&&&&&& removeInfo(num) 호출");
		edao.removeInfo(num);
	}

	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 페이징 처리 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

	// 6. 게시판 총 글 개수 계산
	@Override
	public int getTotalCount() throws Exception {
		logger.info("&&&&&&&&&& getTotalCount() 호출");
		return edao.getTotalCount();
	}
	
	
	
	
	
	

}
