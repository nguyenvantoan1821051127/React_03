import React, { Component } from 'react'
import SanPhamGioHang from './SanPhamGioHang';

export default class DanhSachSanPham extends Component {
  xemChiTiet=(sanphamClick)=>{
    console.log(sanphamClick);
    //set lai giatri
    this.setState({
        sanPhamChitiet:sanphamClick
    })
}
state={
    sanPhamChitiet:{"maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./img/vsphone.jpg"}
}
  render() {
    let {tenSP,hinhAnh,ram,rom,heDieuHanh,manHinh,cameraSau,cameraTruoc}=this.state.sanPhamChitiet;
    const {mangSanPham,themGioHang}=this.props;
    return (
      <div className="container">

        <div className='row'>
            {mangSanPham.map((sanPham,index)=>{
                return(
                    <div className="col-4" key={index}>
                        <SanPhamGioHang themGioHang={themGioHang}sanPham={sanPham} xemChiTiet={this.xemChiTiet}/>
                    </div>
                )
            })}
        </div>
        <div className="mt-4">
            <div className="row pt-4">
                <div className="col-4">
                    <h3 className='text-center'>{tenSP}</h3>
                    <img src={hinhAnh}alt='...' className='w-100'/>
                </div>
                    <div className="col-4">
                        <h3>thong so ky thuat</h3>
                        <table className="table">
                            <thead>
                                <tr>
                                    <td>man hinh</td>
                                    <td>{manHinh}</td>
                                </tr>
                                <tr>
                                    <td>he dieu hanh</td>
                                    <td>{heDieuHanh}</td>
                                </tr>
                                <tr>
                                    <td>camera truoc</td>
                                    <td>{cameraTruoc}</td>
                                </tr>
                                <tr>
                                    <td>camera sau</td>
                                    <td>{cameraSau}</td>
                                </tr>
                                <tr>
                                    <td>RAM</td>
                                    <td>{ram}</td>
                                </tr>
                                <tr>
                                    <td>ROM</td>
                                    <td>{rom}</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
            </div>
        </div>
      </div>
    )
  }
}
