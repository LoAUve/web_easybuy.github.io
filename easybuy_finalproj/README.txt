EASYBUY Django 後端版執行說明

一、進入專案資料夾
cd D:\Documents\DEMO\EASYBUY_Django_REWORK_backend

二、建立虛擬環境
py -m venv .venv

三、啟動虛擬環境
.venv\Scripts\activate

四、安裝套件
py -m pip install -r requirements.txt

五、建立資料庫
py manage.py migrate

六、匯入商品資料
py manage.py seed_products

七、建立後台管理員帳號
py manage.py createsuperuser

八、啟動網站
py manage.py runserver

前台網址：
http://127.0.0.1:8000/

後台網址：
http://127.0.0.1:8000/admin/

重要功能：
1. 商品資料由 Django 後端 Product 資料表提供。
2. 會員註冊與登入由 Django 後端 Member 資料表處理。
3. 訂單送出後會存入 Order 與 OrderItem 資料表。
4. 訂單查詢與會員訂單紀錄會從 SQLite 資料庫讀取。
5. 後台可以修改訂單狀態。
6. 後端已設定取消訂單規則：只有「處理中」可以取消；「已出貨」、「配送中」、「已送達」、「已取消」都不能取消。

測試已出貨不能取消：
1. 前台註冊會員並登入。
2. 加入商品，送出訂單。
3. 進入 /admin/ 後台，找到該訂單。
4. 把訂單狀態改成「已出貨」。
5. 回前台訂單查詢頁按「取消訂單」，系統會顯示無法取消。
