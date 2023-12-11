package taerogramming;
import java.util.List;
import javax.servlet.jsp.tagext.TryCatchFinally;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;



@Controller
//@RequestMapping(value = "/view/*")
public class ExController {

	
	// 로거
	private static final Logger logger = LoggerFactory.getLogger(ExController.class);
	
	// 서비스 주입
	@Autowired
	private ExService eService;
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메서드 정의ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	
	// 테스트
	// http://localhost:8080/lingling
	@RequestMapping(value = "/lingling.do", method = RequestMethod.GET)
	public void linglingGET() throws Exception{
		logger.info("@@@@@@@@@@ linglingGET() 호출");
	}
	
	
	
	// 리스트 출력
	// http://localhost:8080/list
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String listGET(Model model) throws Exception{
		logger.info("@@@@@@@@@@ listGET() 호출");
		
		// DB에 저장된 리스트 가져오기
		List<ExVO> exList =  eService.getList();
		logger.info("@@@@@@@@@@ exList : {}", exList);
		
		// 연결된 뷰페이지에 정보 전달
		model.addAttribute("exList", exList);
		return "/list";
	}
	
	
	
	// 맛집 등록
	// http://localhost:8080/regist
	@RequestMapping(value = "/regist", method = RequestMethod.GET)
	public void registGET() throws Exception{
		logger.info("@@@@@@@@@@ registGET() 호출");
		logger.info("@@@@@@@@@@ regist 페이지 이동");
	}
	
	@RequestMapping(value = "/regist", method = RequestMethod.POST)
	public String registPOST(ExVO vo) throws Exception{
		logger.info("@@@@@@@@@@ registPOST() 호출");
		
		// 입력된 정보 가져오기 (파라미터)
		logger.info("vo : {}", vo);
		// DB에 저장
		eService.regist(vo);
		
		// view 페이지 이동
		return "redirect:/list";
	}
	
	
	
	// 특정 맛집 정보 보기
	// http://localhost:8080/info
	@RequestMapping(value = "/info", method = RequestMethod.GET)
	public void getInfo() throws Exception{
		logger.info("@@@@@@@@@@ getInfo() 호출");
		logger.info("@@@@@@@@@@ info 페이지 이동");
	}
	
		
}
