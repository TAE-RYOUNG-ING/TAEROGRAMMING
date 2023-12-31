package taerogramming.ex.controller;
import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import taerogramming.ex.service.ExService;
import taerogramming.ex.vo.ExVO;
import taerogramming.ex.vo.PageMaker;
import taerogramming.ex.vo.PageVO;



@Controller
//@RequestMapping(value = "/view/*") // 상위 폴더가 있을 경우
public class ExController {

	
	// 로거
	private static final Logger logger = LoggerFactory.getLogger(ExController.class);
	
	// 서비스 주입
	@Autowired
	private ExService eService;
//	@Autowired
//	private PageVO pvo;
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ메서드 정의ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
	
	// 0. 테스트
	// http://localhost:8080/lingling
	@RequestMapping(value = "/lingling", method = RequestMethod.GET)
	public void linglingGET() throws Exception{
		logger.info("@@@@@@@@@@ linglingGET() 호출");
		logger.info("@@@@@@@@@@ lingling.jsp 페이지 이동");
	}
	
	
	
	// 1. 맛집 리스트
	// http://localhost:8080/list
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public void listGET(PageVO pvo, Model model) throws Exception {
		logger.info("@@@@@@@@@@ listGET() 호출");
		
		// DB에 저장된 리스트 가져오기 (페이징 처리 X)
//		List<ExVO> exList =  eService.getList();
		
		// DB에 저장된 리스트 가져오기 (페이징 처리 O)
		// 기본 생성자 page=1, pagesize=5 적용
			List<ExVO> exList =  eService.getListPage(pvo);
			logger.info("@@@@@@@@@@ exList : {}", exList);
			
			// 페이징처리 (하단부) 정보 저장 객체
			PageMaker pm = new PageMaker();
			pm.setPageVO(pvo);
			pm.setTotalCount(eService.getTotalCount());	// calcMyPage() 함수까지 같이 호출
														// 실제 내 DB에 있는 총 글의 개수를 계산하여 파라미터에 넣음
			
			// 연결된 뷰페이지에 정보 전달 & 페이지 이동
			model.addAttribute("exList", exList);
			model.addAttribute("pm", pm);
			logger.info("@@@@@@@@@@ list.jsp 페이지이동");
		
		

	}
	
	
	
	// 2. 맛집 등록
	// http://localhost:8080/regist
	@RequestMapping(value = "/regist", method = RequestMethod.GET)
	public void registGET() throws Exception{
		logger.info("@@@@@@@@@@ registGET() 호출");
        logger.info("@@@@@@@@@@ regist.jsp 페이지 이동");
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
	
	
	
	// 3. 특정 맛집 정보 조회
	@RequestMapping(value = "/info", method = RequestMethod.GET)
	public void getInfo(@RequestParam("num") Integer num, Model model) throws Exception{
		logger.info("@@@@@@@@@@ getInfo() 호출");
		logger.info("@@@@@@@@@@ num = " + num);
		
		// 특정 맛집 정보 가져오기
//		ExVO resultVO = eService.getInfo(num);
//		logger.info("@@@@@@@@@@ resultVO : {}", resultVO);
		// 뷰페이지 전달
//		model.addAttribute("resultVO", resultVO);
		
		// 특정 맛집 정보 가져와서 바로 뷰페이지 전달
		model.addAttribute("vo", eService.getInfo(num));
		logger.info("@@@@@@@@@@ info.jsp 페이지 이동");
	}
	
	
	
	// 4. 특정 맛집 수정
	@RequestMapping(value = "/modify", method = RequestMethod.GET)
	public void updateInfoGET(@RequestParam("num") Integer num, Model model) throws Exception{
		logger.info("@@@@@@@@@@ updateInfoGET() 호출");
		
		// 특정 맛집 정보 가져와서 바로 뷰페이지 전달
		model.addAttribute("vo", eService.getInfo(num));
	}
	
	@RequestMapping(value = "/modify", method = RequestMethod.POST)
	public String updateInfoPOST(ExVO vo) throws Exception{
		logger.info("@@@@@@@@@@ updateInfoPOST() 호출");
		
		// 사용자가 입력한 정보
		logger.info("@@@@@@@@@@ vo : {}", vo);
		
		// DB 정보 업데이트
		eService.updateInfo(vo);
		
		// 리스트로 이동
		return "redirect:/list";
	}
	
	
	
	// 5. 특정 맛집 삭제
	@RequestMapping(value = "/delete", method = RequestMethod.POST)
//	public String deleteInfo(@RequestParam("num") Integer num) throws Exception {
	public String deleteInfo(Integer num) throws Exception { // @RequestParam 생략 가능 
		logger.info("@@@@@@@@@@ deleteInfo() 호출");		 // 컨트롤러의 파라미터 자동 수집 기능
		
		// 해당 정보 삭제하기
		// 사실상 DB에는 저장되어 있고 출력할 때 숨기는 것
		eService.removeInfo(num); 
		// 리스트로 이동
		return "redirect:/list";
	}
	
	
	
	// ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ VWorld API ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
//	@GetMapping("/vworldAPI")
//	public String AddressTranslation(/* String lat, String lng, HttpServeltRequest request */) throws Exception {
//		logger.info("@@@@@@@@@@ AddressTranslation() 호출");
//
//		
//
//        return ret.toString();
//	}



	@ResponseBody
	@RequestMapping("/test")
	public String test() throws Exception{
		Thread.sleep(3000);

		return "5";
	}
	
	
	
}
