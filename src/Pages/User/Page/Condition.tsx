
const Condition = () => {
  return (
    <>
      <div className="">
        <img src="src/assets/image/condition.jpg" alt="" className="brightness-[.75] h-72 object-cover w-full" />
        <div className="container">
          <div className="p-14">
            <h3 className="flex justify-center text-4xl pb-6">ข้อตกลงและเงื่อนไขการใช้งาน</h3>
            <p className="font-semibold p-6">1. ทั่วไป</p>
            <ol className="list-decimal pl-8">
              <li>ข้อตกลงการใช้งานจะเป็นข้อตกลงการใช้งานระหว่างท่านกับแพลตฟอร์ม ซึ่งกำหนดสิทธิ์ หน้าที่และความรับผิดชอบ ที่แต่ละฝ่ายมีระหว่างกัน เกี่ยวกับการให้บริการและการใช้บริการทั้งหมดบนแพลตฟอร์ม</li>
              <li>การใช้งานแพลตฟอร์ม การสร้างบัญชีผู้ใช้งาน หรือเมื่อท่านเริ่มใช้งานแพลตฟอร์ม และยอมรับข้อตกลงการใช้งานของแพลตฟอร์มทางแพลตฟอร์มจะถือว่าท่านยอมรับที่จะปฏิบัติตามและอยู่ภายใต้ข้อตกลงการใช้งาน รวมถึงยอมรับนโยบายความเป็นส่วนตัวที่แพลตฟอร์มกำหนด โดยท่านจะไม่สามารถใช้บริการแพลตฟอร์มได้ หากท่านไม่เห็นด้วยกับข้อตกลง หรือนโยบายความเป็นส่วนตัวดังกล่าว ทั้งนี้ ท่านในฐานะผู้ใช้งานจะต้องไม่ทำการใด ๆ อันเป็นสิ่งผิดกฎหมาย หรือขัดต่อความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชนผ่านแพลตฟอร์มโดยเด็ดขาด รวมถึงจะต้องไม่ทำการใด ๆ อันขัดต่อข้อตกลงการใช้งาน </li>
              <li>แพลตฟอร์ม เป็นช่องทางและเป็นพื้นที่กลางที่เปิดให้ผู้ใช้งานสามารถเลือกใช้บริการในรูปแบบของการชำระเงินตามกำหนดของการบริการนั้นๆ ที่แสดงอยู่บนแพลตฟอร์ม นั้นแสดงถึงการขยายตัวของตลาดการซื้อขายบริการในวิธีดังกล่าว </li>
            </ol>
            <p className="font-semibold p-6">2. การใช้งานของแพลตฟอร์ม</p>
            <ol className="list-decimal pl-8">
              <li>ผู้ใช้งานต้องดำเนินการสมัครสมาชิกตามขั้นตอนที่กำหนด หรือตามขั้นตอนอื่นใดที่อาจมีการแก้ไขเพิ่มเติมต่อไปในอนาคตให้เสร็จสิ้นแล้วเท่านั้น ผู้ใช้งานจึงจะสามารถเป็นผู้ใช้บริการ หรือเป็นผู้ให้บริการ (พี่เลี้ยง)</li>
              <li>ผู้ใช้งานยืนยันว่าข้อมูลต่าง ๆ ที่ผู้ใช้งานใช้ในการสมัครสมาชิก เป็นข้อมูลที่ถูกต้องครบถ้วน ไม่เป็นเท็จ ไม่ทำให้ผู้อื่นสำคัญผิด หรือไม่ขาดข้อมูลที่ควรต้องแจ้งในสาระสำคัญของผู้ใช้งานเอง หากทางแพลตฟอร์มพบว่าข้อมูลไม่ถูกต้อง ไม่ว่าในระหว่างการสมัคร หรือหลังจากที่การสมัครเสร็จสิ้นแล้ว ทางแพลตฟอร์ม มีสิทธิ์ระงับการใช้งานบัญชี ยกเลิก หรือดำเนินการเรียกร้องค่าเสียหายที่เกิดขึ้นจากผู้ใช้งานได้</li>
              <li>ผู้ใช้งานสามารถสมัครเป็นสมาชิกผ่านแพลตฟอร์ม ได้โดยไม่มีค่าใช้จ่าย</li>
              <li>ทางแพลตฟอร์ม จะเก็บค่าธรรมเนียมการใช้บริการแพลตฟอร์ม (Commission) ซึ่งเป็นค่าดำเนินการและค่าบริหารระบบต่าง ๆ ของแพลตฟอร์ม ที่เกี่ยวกับการให้บริการในอัตราตามที่ผู้ให้บริการ (พี่เลี้ยง) กำหนด ทั้งนี้ ค่าธรรมเนียมดังกล่าวจะถูกหักออกจากรายได้ของผู้ให้บริการ (พี่เลี้ยง) โดยอัตโนมัติ และไม่มีการเรียกเก็บค่าใช้จ่ายอื่นใดจากผู้ใช้บริการเพิ่มเติม</li>
              <li>การติดต่อขอข้อมูลเพิ่มเติมเพื่อการดำเนินงานหรือบริการของผู้ให้บริการ (พี่เลี้ยง) สามารถทำได้ผ่านช่องทางการสื่อสารบนหน้างานหรือกล่องข้อความบนแพลตฟอร์มเท่านั้น หากพบว่าผู้ใช้งานมีพฤติกรรมใดที่เป็นการชักจูง หรือจูงใจให้นำไปสู่การติดต่อเพื่อจ้างงานนอกแพลตฟอร์ม ซึ่งรวมถึงการมีเจตนาจ่ายมัดจำ หรือการชำระเพียงบางส่วน เพื่อไปจ้างงานต่อนอกแพลตฟอร์ม เว้นแต่เป็นการชำระเงินผ่านระบบบนแพลตฟอร์ม ทางแพลตฟอร์ม จะถือว่าผู้ใช้งานดังกล่าวกระทำผิดข้อตกลงการใช้งาน และทางแพลตฟอร์ม มีสิทธิ์เด็ดขาดแต่เพียงผู้เดียวในการใช้ดุลพินิจระงับการใช้งานบัญชี/ระงับงานชั่วคราว ถาวร หรือ ลบบัญชีและขึ้นทะเบียนแบล็คลิสต์ หรือการอื่นใดที่ทางแพลตฟอร์มเห็นสมควร</li>
              <li>การใช้บริการ หากผู้ใช้บริการต้องการที่จะใช้บริการใด ๆ ที่ทางแพลตฟอร์มเสนอการให้บริการบนแพลตฟอร์ม ผู้ใช้บริการต้องดำเนินการตามขั้นตอนต่าง ๆ ดังนี้
                <ol className="list-decimal pl-8">
                  <li>ผู้ใช้บริการต้องเลือกการบริการต่างๆตามที่แพลตฟอร์มเสนอไว้บนแพลตฟอร์ม เพื่อให้ผู้ให้บริการ (พี่เลี้ยง) ทราบถึงความต้องการของผู้ใช้บริการ จากนั้นผู้ให้บริการ (พี่เลี้ยง) จะประเมินราคาซึ่งการประเมินราคาของผู้ให้บริการ (พี่เลี้ยง)  อาจมากกว่าหรือน้อยกว่า ผู้ให้บริการ (พี่เลี้ยง) ท่านอื่น ซึ่งผู้ใช้บริการสามารถพิจารณาเลือกผู้ให้บริการ (พี่เลี้ยง) ตามเห็นสมควรของผู้ใช้บริการ</li>
                  <li>ผู้ใช้บริการและผู้ให้บริการ (พี่เลี้ยง) จะต้องไม่กระทำการใด ๆ เพื่อเป็นการชักจูง หรือจูงใจให้นำไปสู่การติดต่อเพื่อจ้างงานนอกแพลตฟอร์ม</li>
                  <li>ผู้ให้บริการ (พี่เลี้ยง) มีสิทธิ์ปฏิเสธการรับงานจากผู้ใช้บริการ โดยผู้ให้บริการ (พี่เลี้ยง) ต้องแจ้งเหตุผลกับทางแพลตฟอร์ม</li>
                  <li>ผู้ใช้บริการสามารถซื้อบริการได้โดยการกดส่งคำขอใช้บริการที่บนแพลตฟอร์มเสนอไว้ เมื่อทำคำสั่งซื้อและยอมรับเงื่อนไขข้างต้นแล้ว ผู้ใช้บริการจะต้องชำระเงินค่าบริการผ่านแพลตฟอร์มก่อนเท่านั้น โดยจะยึดกำหนดการเริ่มงานวันแรกตามข้อมูลที่ผู้ใช้บริการกำหนด กรณีที่ผู้ใช้บริการไม่ชำระเงินภายใน24ชั่วโมงจะถือว่าผู้ใช้บริการไม่พร้อมที่จะใช้บริการทางแพลตฟอร์มและระบบจะยกเลิกคำสั่งงานโดยอัตโนมัติ </li>
                  <li>เมื่อผู้ใช้บริการชำระเงินพร้อมแสดงหลักฐานการชำระเงินเสร็จสิ้นสมบูรณ์แล้ว ทางแพลตฟอร์มจะสร้างออเดอร์ให้แก่ผู้ให้บริการ (พี่เลี้ยง)</li>
                  <li>ผู้ใช้บริการไม่สามารถชำระเงินผ่านวิธีการหรือช่องทางอื่น นอกเหนือจากการทำรายการผ่านแพลตฟอร์มได้</li>
                  <li>เมื่อผู้ให้บริการ (พี่เลี้ยง) ได้รับออเดอร์สำหรับงานบริการที่ว่าจ้างและกำหนดการเริ่มงานแล้ว ผู้ให้บริการ (พี่เลี้ยง) จะต้องดำเนินการตามที่ผู้ใช้บริการได้เลือกบริการไว้ข้างต้นและส่งสัตว์เลี้ยงให้แก่ผู้ใช้บริการตามกำหนด</li>
                  <li>เมื่อผู้ให้บริการ(พี่เลี้ยง) ดำเนินการตามที่จ้างเสร็จสิ้นแล้ว ผู้ให้บริการ(พี่เลี้ยง) สามารถกดส่งงาน โดยออเดอร์จะถูกเปลี่ยนสถานะเป็นเสร็จสิ้นภายหลังจากที่ออเดอร์อยู่ในสถานะเสร็จสิ้นทางแพลตฟอร์มจะแจ้งให้ผู้ใช้บริการทราบและผู้ใช้บริการสามารถประเมินความพึงพอใจการใช้บริการจากผู้ให้บริการ(พี่เลี้ยง) เพื่อเป็นประโยชน์และแนวทางการพิจารณากับผู้ใช้บริการท่านอื่น </li>
                </ol>
              </li>
            </ol>
            <p className="font-semibold p-6">3. การยกเลิกออเดอร์ และการขอคืนเงิน</p>
            <ol className="list-decimal pl-8">
              <li>เมื่อออเดอร์ถูกสร้างแล้ว หากผู้ให้บริการ(พี่เลี้ยง) มีความจำเป็นที่จะต้องยกเลิกงานการให้บริการ ผู้ให้บริการ(พี่เลี้ยง)จะต้องแจ้งมายังทางแพลตฟอร์มตามช่องทางติดต่อของทางแพลตฟอร์มโดยตรง ทั้งนี้ ทางแพลตฟอร์มจะเป็นผู้ตรวจสอบความเหมาะสมสำหรับการยกเลิกออเดอร์ และทางแพลตฟอร์ม มีสิทธิ์เด็ดขาดแต่เพียงผู้เดียวในการพิจารณาการคืนเงินค่างาน </li>
              <li>อย่างไรก็ตาม ออเดอร์จะไม่สามารถถูกยกเลิกได้หากเป็นออเดอร์ที่ผู้ให้บริการ(พี่เลี้ยง)ได้กดรับงานการให้บริการนั้นแล้ว ทั้งนี้ หากผู้ใช้บริการไม่พอใจในคุณภาพของงาน ผู้ใช้บริการสามารถรีวิวและให้คะแนนการประเมินตามความเหมาะสมได้ </li>
              <li>หากทางแพลตฟอร์มพิจารณาแล้วและเห็นสมควรยกเลิกออเดอร์ จะมีการคืนเงินที่เกี่ยวข้องกับการเลือกใช้บริการที่มีการยกเลิกให้แก่ผู้ใช้บริการ</li>
            </ol>
            <p className="font-semibold p-6">4. นโยบายความเป็นส่วนตัว</p>
            <ol className="list-decimal pl-8">
              <li>ทางแพลตฟอร์มให้ความสำคัญแก่ความปลอดภัยของข้อมูลของท่าน ซึ่งนโยบายความเป็นส่วนตัวนี้ถือเป็นส่วนหนึ่งของข้อตกลงการใช้งานด้วย</li>
              <li>เพื่อรักษาข้อมูลส่วนบุคคลของผู้ใช้งาน ข้อมูลที่ใช้สำหรับการระบุตัวบุคคลของผู้ใช้งานจะถูกเก็บเป็นความลับ และจะถูกเปิดเผยแก่บุคคลภายนอก เมื่อได้รับการยินยอมจากผู้ใช้งานซึ่งเป็นเจ้าของข้อมูลหรือเฉพาะในกรณีที่ผู้ใช้งานขอให้เปิดเผยเท่านั้น </li>
              <li>ทางแพลตฟอร์มขอสงวนสิทธิ์ในการเข้าถึงและตรวจสอบข้อมูลส่วนบุคคลของผู้ใช้งาน รวมถึงการสื่อสารระหว่างผู้ใช้งานที่สื่อสารผ่านแพลตฟอร์ม ทั้งนี้ ทางแพลตฟอร์มจะเข้าถึงและตรวจสอบข้อมูลดังกล่าว ซึ่งถือเป็นข้อมูลส่วนบุคคลของผู้ใช้งานเฉพาะเพื่อวัตถุประสงค์ในการระงับข้อพิพาทระหว่างผู้ใช้งาน ตรวจสอบกรณีมีข้อสงสัยเรื่องการทุจริต การกระทำผิดข้อตกลงการใช้งาน หรือเพื่อวัตถุประสงค์อื่นตามที่กำหนดในนโยบายความเป็นส่วนตัว หรือกรณีที่มีข้อสงสัยว่าผู้ใช้งานจะกระทำการใด ๆ อันเป็นสิ่งผิดกฎหมาย หรือขัดต่อความสงบเรียบร้อยหรือศีลธรรมอันดีของประชาชนผ่านแพลตฟอร์ม </li>
            </ol>
            <p className="font-semibold p-6">5. การระงับข้อพิพาทระหว่างผู้ใช้บริการและผู้ให้บริการ (พี่เลี้ยง)</p>
            <ol className="list-decimal pl-8">
                <li>ทางแพลตฟอร์ม สนับสนุนผู้ใช้งานสามารถติดต่อทีมงานของทางแพลตฟอร์ม มายังช่องทางติดต่อที่ระบุไว้ในแพลตฟอร์ม เพื่อให้ทีมงานของทางแพลตฟอร์มเข้ามาช่วยเหลือในการระงับข้อพิพาทดังกล่าวให้แก่ผู้ใช้งานได้</li>
                <li>หากผู้ให้บริการ (พี่เลี้ยง) ไม่สามารถส่งมอบสัตว์เลี้ยงได้ภายในเวลาที่กำหนดไว้ ผู้ให้บริการ (พี่เลี้ยง) มีสิทธิ์ที่จะถูกร้องเรียนจากผู้ใช้บริการได้ และอาจส่งผลต่อรีวิวและคะแนนการประเมินงานของผู้ให้บริการ (พี่เลี้ยง)</li>
            </ol>
            <p className="font-semibold p-6">6. ข้อสงวนสิทธิ์ของแพลตฟอร์ม</p>
            <ol className="list-decimal pl-8">
              <li>การกำหนดให้การชำระค่าบริการต้องทำรายการผ่านแพลตฟอร์มนั้น เป็นไปเพื่อผลประโยชน์และความปลอดภัยของผู้ใช้งานเอง เนื่องจากวิธีการดังกล่าวทำให้ผู้ให้บริการ (พี่เลี้ยง) เกิดความมั่นใจว่าจะได้รับผลตอบแทนจากการทำงาน และผู้ใช้บริการก็ยังมีโอกาสได้รับเงินคืน หากผู้ให้บริการ (พี่เลี้ยง) ไม่ทำงานตามเงื่อนไขที่ตกลงกันไว้ อย่างไรก็ตาม เงินที่ผู้ใช้งานชำระผ่านแพลตฟอร์ม นั้น ไม่ใช่เงินรายรับของทางแพลตฟอร์มเพียงแต่ว่าผู้ให้บริการ (พี่เลี้ยง) ได้ให้ความยินยอมแก่ทางแพลตฟอร์ม ในการหักค่าธรรมเนียมการใช้บริการแพลตฟอร์ม (Commission) ซึ่งเป็นค่าดำเนินการและค่าบริหารระบบต่าง ๆ ของแพลตฟอร์ม ที่เกี่ยวข้องกับการให้บริการออกจากเงินจำนวนดังกล่าวได้เท่านั้น ทางแพลตฟอร์ม จึงไม่ได้เป็นทั้งตัวการหรือตัวแทนอันเกี่ยวข้องกับการรับจ้างทำงานของผู้ให้บริการ (พี่เลี้ยง) แต่อย่างใด</li>
              <li>บริษัทฯ ขอสงวนสิทธิ์ในความรับผิดใด ๆ สำหรับการตกลงจ้างงานบริการที่ไม่อยู่ในออเดอร์ หรือมีการชำระเงินโดยไม่ผ่านแพลตฟอร์ม หรือเป็นกรณีที่ผู้ใช้ละเมิดข้อตกลงการใช้งานข้อหนึ่งข้อใดของแพลตฟอร์ม </li>
              <li>เนื้อหาของผู้ใช้งาน ไม่ว่าจากผู้ให้บริการ (พี่เลี้ยง) หรือผู้ใช้บริการ จะถือว่าเป็นเนื้อหาที่สร้างโดยผู้ใช้งานทั้งหมด ทางแพลตฟอร์มไม่มีหน้าที่ในการตรวจสอบเนื้อหาดังกล่าว ถึงความเหมาะสม หรือการละเมิดสิทธิต่าง ๆ ของบุคคลอื่น แต่หากทางแพลตฟอร์มทราบเองหรือรับทราบโดยการแจ้งจากบุคคลภายนอกถึงการใช้งานที่มีเนื้อหาไม่เหมาะสม หรือมีการละเมิดสิทธิต่าง ๆ ของบุคคลอื่น ทางแพลตฟอร์มจะทำการตรวจสอบเนื้อหาดังกล่าวประกอบกับหลักฐานที่อาจขอจากผู้ใช้งานเพิ่มเติม เพื่อพิจารณาลบหรือระงับเนื้อหาตามที่แพลตฟอร์ม เห็นสมควร</li>
            </ol>
            <p className="font-semibold p-6">7. การรีวิวและคะแนนการประเมินผลงาน</p>
            <ol className="list-decimal pl-8">
              <li>การรีวิวและการให้คะแนนการประเมินการให้บริการ เป็นส่วนสำคัญสำหรับระบบรีวิวของเว็บไซต์ โดยการรีวิวและคะแนนการประเมินต่างๆจากผู้ใช้บริการนั้น แสดงถึงความพึงพอใจในการรับบริการของผู้ให้บริการ (พี่เลี้ยง)  ทางแพลตฟอร์มอยากสนับสนุนให้ผู้ใช้บริการสื่อสารกับผู้ให้บริการ (พี่เลี้ยง) ถึงปัญหาในการให้บริการ เพื่อให้ผู้ให้บริการ (พี่เลี้ยง)  ได้รับรู้และแก้ไขปรับปรุง</li>
              <li>การให้รีวิวเป็นสิทธิ์ของผู้ใช้บริการ รีวิวต่างๆจะไม่ถูกลบออกไม่ว่าด้วยเหตุผลใดๆ ยกเว้นแต่ในกรณีที่รีวิวดังกล่าวละเมิดข้อตกลงการใช้งานของเว็บไซต์</li>
              <li>เพื่อป้องกันการใช้งานระบบรีวิวและคะแนนการประเมินอย่างผิดวัตถุประสงค์ ผู้ใช้บริการสามารถรีวิว และให้คะแนนการประเมินกับงานที่ตนเองได้สร้างออเดอร์และชำระเงินผ่านระบบเว็บไซต์สมบูรณ์แล้วเท่านั้น </li>
            </ol>
            <p className="font-semibold p-6">8. อื่นๆ</p>
            <ol className="list-decimal pl-8">
              <li>ผู้ใช้งานสามารถติดต่อทีมงานของทางแพลตฟอร์มได้ หากผู้ใช้มีความต้องการที่จะเปลี่ยนแปลงสถานะออเดอร์นอกเหนือจากที่แพลตฟอร์มกำหนดให้</li>
            </ol>
          </div>
        </div>
      </div>
    </>
  )
}

export default Condition