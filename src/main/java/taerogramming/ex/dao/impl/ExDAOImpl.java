package taerogramming.ex.dao.impl;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Repository;
import egovframework.com.cmm.service.impl.EgovComAbstractDAO;
import taerogramming.ex.vo.ExVO;
import taerogramming.ex.vo.PageVO;



@Repository
public class ExDAOImpl extends EgovComAbstractDAO{

	// 로거
	private static final Logger logger = LoggerFactory.getLogger(ExDAOImpl.class);
	
	// namespace 데이터 상수로 저장
	private static final String NAMESPACE = "LingLing";
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메서드 정의ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	
	// 1-1. 맛집 리스트
	public List<ExVO> readList() throws Exception {
		logger.info("########## readList() 호출");
//		return sqlSession.selectList(NAMESPACE + ".list");
		return selectList(NAMESPACE + ".list");
	}
	
	// 1-2. 맛집 리스트 (페이징 처리)
	public List<ExVO> getListPage(PageVO vo) throws Exception {
		logger.info("########## getListPage() 호출");
		return selectList(NAMESPACE + ".listPage", vo);
	}

	// 2. 맛집 등록
	public void insert(ExVO vo) throws Exception {
		logger.info("########## insert() 호출");
		
		int result = insert(NAMESPACE + ".create", vo);
		if(result != 0) {
			logger.info("########## 글쓰기 완료");
		}
	}
	
	// 3. 특정 맛집 정보 조회
	public ExVO getInfo(Integer num) throws Exception {
		logger.info("########## getInfo() 호출");
		return selectOne(NAMESPACE + ".info", num);
	}
	
	// 4. 특정 맛집 수정
	public void updateInfo(ExVO vo) throws Exception {
		logger.info("########## updateInfo() 호출");
		update(NAMESPACE + ".updateInfo", vo);
	}

	// 5. 특정 맛집 삭제
	public void removeInfo(Integer num) throws Exception {
		logger.info("########## removeInfo() 호출");
		update(NAMESPACE + ".removeInfo", num);
	}
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ 페이징 처리 ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	
	// 6. 전체 글 개수 계산
	public int getTotalCount() throws Exception {
		logger.info("########## getTotalCount() 호출");
		return selectOne(NAMESPACE + ".totalCnt");
	}
	
	
}
