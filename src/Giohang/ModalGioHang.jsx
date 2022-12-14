import React, { Component } from 'react'

export default class ModalGioHang extends Component {
  render() {
    const {gioHang,xoaGioHang,tangGiamSoLuong}=this.props;
    return (
      
<div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content" style={{maxWidth:'800px',width:'800px'}}>
      <div className="modal-header">
        <h5 className="modal-title">Gio hang</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <div className="modal-body">
        <table className='table '>
          <thead>
            <tr>
                <td>Ma SP</td>
                <td>Hinh Anh</td>
                <td>ten SP</td>
                <td>so luong</td>
                <td>don gia</td>
                <td>thanh tien</td>
            </tr>
          </thead>
          <tbody>       
              {gioHang.map((spGH,index)=>{
                return (<tr key={index}>
                  <td>{spGH.maSP}</td>
                  <td><img src={spGH.hinhAnh} width={50} alt="..."/></td>
                  <td>{spGH.tenSP}</td>
                  <td>
                    <button className='btn btn-primary'onClick={()=>tangGiamSoLuong(spGH.maSP,true)}>+</button>
                    {spGH.soLuong}
                    <button className='btn btn-primary'onClick={()=>tangGiamSoLuong(spGH.maSP,false)}>-</button>
                    </td>
                  <td>{spGH.giaBan.toLocaleString()}</td>
                  <td>{(spGH.soLuong * spGH.giaBan).toLocaleString()}</td>
                  <td><button className='btn btn-danger'onClick={()=>xoaGioHang(spGH.maSP)}>xoa</button></td>
                </tr>)
              })}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="5"></td>
              <td>tong tien</td>
              <td>
                {this.props.gioHang.reduce((tongTien,spGioHang,index)=>{
                  return tongTien +=spGioHang.soLuong* spGioHang.giaBan
                },0).toLocaleString()}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-success" data-bs-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>

      
    )
  }
}
