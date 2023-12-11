package taerogramming.ex.service.impl;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import taerogramming.ex.dao.ExDAO;
import taerogramming.ex.service.ExService;
import taerogramming.ex.vo.ExVO;



@Service
public class ExServiceImpl implements ExService {

	
	// 로거
	private static final Logger logger = LoggerFactory.getLogger(ExServiceImpl.class);
	
	// 객체 주입
	@Autowired
	private ExDAO edao;
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메서드 정의ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	
	// 리스트
	@Override
	public List<ExVO> getList() throws Exception {
		logger.info("&&&&&&&&&& getList() 호출");
		return edao.readList();
	}

	// 등록
	@Override
	public void regist(ExVO vo) throws Exception {
		logger.info("&&&&&&&&&& regist(vo) 호출");
		edao.insert(vo);
	}
	
	
	

}
