package taerogramming.ex.vo;



public class ExVO {

	private Integer num;
	private String title;
	private String addr;
	private String xxx;
	private String yyy;
	private String review;
	
	public Integer getNum() {
		return num;
	}
	public void setNum(Integer num) {
		this.num = num;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAddr() {
		return addr;
	}
	public void setAddr(String addr) {
		this.addr = addr;
	}
	public String getXxx() {
		return xxx;
	}
	public void setXxx(String xxx) {
		this.xxx = xxx;
	}
	public String getYyy() {
		return yyy;
	}
	public void setYyy(String yyy) {
		this.yyy = yyy;
	}
	public String getReview() {
		return review;
	}
	public void setReview(String review) {
		this.review = review;
	}
	
	@Override
	public String toString() {
		return "ExVO [num=" + num + ", title=" + title + ", addr=" + addr + ", xxx=" + xxx + ", yyy=" + yyy
				+ ", review=" + review + "]";
	}

}
