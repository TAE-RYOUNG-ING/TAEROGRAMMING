package taerogramming;
import java.util.List;
import org.apache.ibatis.session.SqlSession;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;



@Repository
public class ExDAOImpl implements ExDAO {

	// 로거
	private static final Logger logger = LoggerFactory.getLogger(ExDAOImpl.class);
	
	// 객체 주입
	@Autowired
	private SqlSession sqlSession;
	
	// namespace 데이터 상수로 저장
	private static final String NAMESPACE = "LingLing";
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메서드 정의ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	
	// 리스트
	@Override
	public List<ExVO> readList() throws Exception {
		logger.info("########## readList() 호출");
		return sqlSession.selectList(NAMESPACE + ".list");
	}

	// 등록
	@Override
	public void insert(ExVO vo) throws Exception {
		logger.info("########## insert() 호출");
		
		int result = sqlSession.insert(NAMESPACE + ".create", vo);
		if(result != 0) {
			logger.info("########## 글쓰기 완료");
		}
	}
	
	

	
}
