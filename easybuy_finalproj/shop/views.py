import json
import random
from datetime import datetime
from django.http import JsonResponse
from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.utils import timezone
from .models import Product, Member, Order, OrderItem


# 會員點數兌換優惠券設定。cost 代表需要消耗的會員點數。
POINT_COUPON_REWARDS = {
    'POINT30': {'code': 'POINT30', 'cost': 100, 'discount': 30, 'text': '折抵 NT$30'},
    'POINT80': {'code': 'POINT80', 'cost': 250, 'discount': 80, 'text': '折抵 NT$80'},
    'POINT150': {'code': 'POINT150', 'cost': 450, 'discount': 150, 'text': '折抵 NT$150'},
    'POINT300': {'code': 'POINT300', 'cost': 800, 'discount': 300, 'text': '折抵 NT$300'},
}


# 部分商品支援「份數 / 入數」選擇。價格代表「一組該規格」的價格，購買數量代表購買幾組。
PACKAGE_OPTIONS = {
    # 食飲品：參考量販/連鎖通路常見販售方式，飲料、零食、冷凍食品、沖泡品多以多入組販售。
    1: [
        {'id': 'box1', 'label': '1盒', 'price': 65, 'packCount': 1},
        {'id': 'box3', 'label': '3盒', 'price': 185, 'packCount': 3},
        {'id': 'box6', 'label': '6盒', 'price': 355, 'packCount': 6},
    ],
    2: [
        {'id': 'pack2', 'label': '2包', 'price': 105, 'packCount': 2},
        {'id': 'pack6', 'label': '6包', 'price': 300, 'packCount': 6},
        {'id': 'pack12', 'label': '12包', 'price': 570, 'packCount': 12},
    ],
    3: [
        {'id': 'bottle2', 'label': '2瓶', 'price': 68, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 190, 'packCount': 6},
        {'id': 'bottle12', 'label': '12瓶', 'price': 360, 'packCount': 12},
        {'id': 'bottle24', 'label': '24瓶', 'price': 690, 'packCount': 24},
    ],
    4: [
        {'id': 'bottle2', 'label': '2瓶', 'price': 58, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 168, 'packCount': 6},
        {'id': 'bottle12', 'label': '12瓶', 'price': 320, 'packCount': 12},
        {'id': 'bottle24', 'label': '24瓶', 'price': 610, 'packCount': 24},
    ],
    6: [
        {'id': 'bag1', 'label': '1包', 'price': 120, 'packCount': 1},
        {'id': 'bag2', 'label': '2包', 'price': 230, 'packCount': 2},
        {'id': 'bag4', 'label': '4包', 'price': 440, 'packCount': 4},
    ],
    7: [
        {'id': 'piece2', 'label': '2片', 'price': 340, 'packCount': 2},
        {'id': 'piece4', 'label': '4片', 'price': 650, 'packCount': 4},
        {'id': 'piece6', 'label': '6片', 'price': 930, 'packCount': 6},
    ],
    8: [
        {'id': 'pack2', 'label': '2入', 'price': 180, 'packCount': 2},
        {'id': 'pack6', 'label': '6入', 'price': 510, 'packCount': 6},
        {'id': 'pack12', 'label': '12入', 'price': 960, 'packCount': 12},
    ],
    9: [
        {'id': 'pack5', 'label': '5包', 'price': 215, 'packCount': 5},
        {'id': 'pack12', 'label': '12包', 'price': 500, 'packCount': 12},
        {'id': 'pack24', 'label': '24包', 'price': 960, 'packCount': 24},
    ],
    10: [
        {'id': 'bottle2', 'label': '2瓶', 'price': 80, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 230, 'packCount': 6},
        {'id': 'bottle12', 'label': '12瓶', 'price': 438, 'packCount': 12},
    ],
    11: [
        {'id': 'stick15', 'label': '15包', 'price': 150, 'packCount': 15},
        {'id': 'stick30', 'label': '30包', 'price': 285, 'packCount': 30},
        {'id': 'stick45', 'label': '45包', 'price': 420, 'packCount': 45},
    ],
    12: [
        {'id': 'bottle2', 'label': '2瓶', 'price': 106, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 300, 'packCount': 6},
        {'id': 'bottle24', 'label': '24瓶', 'price': 1120, 'packCount': 24},
    ],
    13: [
        {'id': 'bottle2', 'label': '2瓶', 'price': 96, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 278, 'packCount': 6},
        {'id': 'bottle12', 'label': '12瓶', 'price': 528, 'packCount': 12},
    ],
    14: [
        {'id': 'bag1', 'label': '1包', 'price': 40, 'packCount': 1},
        {'id': 'bag3', 'label': '3包', 'price': 112, 'packCount': 3},
        {'id': 'bag6', 'label': '6包', 'price': 216, 'packCount': 6},
    ],
    15: [
        {'id': 'bag1', 'label': '1包', 'price': 35, 'packCount': 1},
        {'id': 'bag3', 'label': '3包', 'price': 98, 'packCount': 3},
        {'id': 'bag6', 'label': '6包', 'price': 188, 'packCount': 6},
    ],
    16: [
        {'id': 'bag1', 'label': '1包', 'price': 60, 'packCount': 1},
        {'id': 'bag3', 'label': '3包', 'price': 170, 'packCount': 3},
        {'id': 'bag6', 'label': '6包', 'price': 330, 'packCount': 6},
    ],
    17: [
        {'id': 'bag1', 'label': '1包', 'price': 90, 'packCount': 1},
        {'id': 'bag3', 'label': '3包', 'price': 255, 'packCount': 3},
        {'id': 'bag6', 'label': '6包', 'price': 500, 'packCount': 6},
    ],
    18: [
        {'id': 'bag1', 'label': '1包', 'price': 130, 'packCount': 1},
        {'id': 'bag2', 'label': '2包', 'price': 250, 'packCount': 2},
        {'id': 'bag4', 'label': '4包', 'price': 480, 'packCount': 4},
    ],
    19: [
        {'id': 'bag1', 'label': '1包', 'price': 85, 'packCount': 1},
        {'id': 'bag2', 'label': '2包', 'price': 160, 'packCount': 2},
        {'id': 'bag4', 'label': '4包', 'price': 310, 'packCount': 4},
    ],
    20: [
        {'id': 'bottle6', 'label': '6瓶', 'price': 220, 'packCount': 6},
        {'id': 'bottle12', 'label': '12瓶', 'price': 420, 'packCount': 12},
        {'id': 'bottle24', 'label': '24瓶', 'price': 800, 'packCount': 24},
    ],

    # 日生活用品：消耗型用品保留組合購買；體積大或個人使用品維持單件。
    21: [
        {'id': 'bundle1', 'label': '1串', 'price': 199, 'packCount': 1},
        {'id': 'bundle2', 'label': '2串', 'price': 388, 'packCount': 2},
        {'id': 'bundle6', 'label': '6串', 'price': 1120, 'packCount': 6},
    ],
    22: [
        {'id': 'pack2', 'label': '2支', 'price': 150, 'packCount': 2},
        {'id': 'pack4', 'label': '4支', 'price': 280, 'packCount': 4},
        {'id': 'pack8', 'label': '8支', 'price': 520, 'packCount': 8},
    ],
    23: [
        {'id': 'bottle1', 'label': '1瓶', 'price': 220, 'packCount': 1},
        {'id': 'bottle2', 'label': '2瓶', 'price': 420, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 1200, 'packCount': 6},
    ],
    24: [
        {'id': 'bottle1', 'label': '1瓶', 'price': 240, 'packCount': 1},
        {'id': 'bottle2', 'label': '2瓶', 'price': 460, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 1320, 'packCount': 6},
    ],
    25: [
        {'id': 'piece1', 'label': '1條', 'price': 120, 'packCount': 1},
        {'id': 'piece2', 'label': '2條', 'price': 230, 'packCount': 2},
        {'id': 'piece4', 'label': '4條', 'price': 440, 'packCount': 4},
    ],
    29: [
        {'id': 'bottle1', 'label': '1瓶', 'price': 260, 'packCount': 1},
        {'id': 'bottle2', 'label': '2瓶', 'price': 500, 'packCount': 2},
        {'id': 'bottle4', 'label': '4瓶', 'price': 960, 'packCount': 4},
    ],
    35: [
        {'id': 'pack1', 'label': '1入', 'price': 180, 'packCount': 1},
        {'id': 'pack3', 'label': '3入', 'price': 510, 'packCount': 3},
        {'id': 'pack6', 'label': '6入', 'price': 960, 'packCount': 6},
    ],
    36: [
        {'id': 'pack1', 'label': '1入', 'price': 220, 'packCount': 1},
        {'id': 'pack3', 'label': '3入', 'price': 630, 'packCount': 3},
        {'id': 'pack6', 'label': '6入', 'price': 1200, 'packCount': 6},
    ],
    38: [
        {'id': 'bottle1', 'label': '1瓶', 'price': 90, 'packCount': 1},
        {'id': 'bottle2', 'label': '2瓶', 'price': 170, 'packCount': 2},
        {'id': 'bottle6', 'label': '6瓶', 'price': 490, 'packCount': 6},
    ],
    39: [
        {'id': 'pack10', 'label': '10入', 'price': 110, 'packCount': 10},
        {'id': 'pack20', 'label': '20入', 'price': 208, 'packCount': 20},
        {'id': 'pack60', 'label': '60入', 'price': 590, 'packCount': 60},
    ],
    40: [
        {'id': 'pack3', 'label': '3盒', 'price': 210, 'packCount': 3},
        {'id': 'pack6', 'label': '6盒', 'price': 400, 'packCount': 6},
        {'id': 'pack12', 'label': '12盒', 'price': 760, 'packCount': 12},
    ],
}

def get_package_options(product):
    options = PACKAGE_OPTIONS.get(product.external_id)
    if options:
        return options
    return [{'id': 'single', 'label': '單件', 'price': product.price, 'packCount': 1}]

def resolve_package_option(product, option_id):
    option_id = (option_id or 'single').strip()
    options = get_package_options(product)
    for option in options:
        if option['id'] == option_id:
            return option
    return options[0]

def page(request, template_name):
    return render(request, f'shop/{template_name}')

def read_json(request):
    try:
        return json.loads(request.body.decode('utf-8') or '{}')
    except json.JSONDecodeError:
        return {}

def member_to_dict(member):
    return {
        'username': member.username,
        'name': member.name,
        'points': member.points,
        'createdAt': timezone.localtime(member.created_at).strftime('%Y/%m/%d %H:%M:%S'),
    }

def product_to_dict(p):
    return {
        'id': p.external_id,
        'name': p.name,
        'price': p.price,
        'category': p.category,
        'emoji': p.emoji,
        'desc': p.desc,
        'stock': p.stock,
        'packageOptions': get_package_options(p),
    }

def order_to_dict(order):
    return {
        'orderNo': order.order_no,
        'member': order.member.username if order.member else '',
        'name': order.customer_name,
        'phone': order.phone,
        'address': order.address,
        'subtotal': order.subtotal,
        'discount': order.discount,
        'coupon': order.coupon,
        'shippingFee': order.shipping_fee,
        'shippingMethod': order.shipping_method,
        'total': order.total,
        'status': order.status,
        'cancelled': order.cancelled,
        'createdAt': timezone.localtime(order.created_at).strftime('%Y/%m/%d %H:%M:%S'),
        'items': [
            {
                'id': item.product_external_id,
                'name': item.name,
                'price': item.price,
                'quantity': item.quantity,
                'emoji': item.emoji,
            }
            for item in order.items.all()
        ]
    }

def make_order_no():
    today = timezone.localtime().strftime('%Y%m%d')
    while True:
        no = f'EB{today}{random.randint(1000, 9999)}'
        if not Order.objects.filter(order_no=no).exists():
            return no

def api_products(request):
    products = Product.objects.filter(is_active=True).order_by('external_id')
    return JsonResponse({'ok': True, 'products': [product_to_dict(p) for p in products]})

@csrf_exempt
def api_member_register(request):
    if request.method != 'POST':
        return JsonResponse({'ok': False, 'error': '只接受 POST'}, status=405)
    data = read_json(request)
    username = (data.get('username') or '').strip()
    password = (data.get('password') or '').strip()
    name = (data.get('name') or '').strip()
    if not username or not password or not name:
        return JsonResponse({'ok': False, 'error': '請完整輸入帳號、密碼與姓名'})
    if len(password) < 4:
        return JsonResponse({'ok': False, 'error': '密碼至少需要 4 個字元'})
    if Member.objects.filter(username=username).exists():
        return JsonResponse({'ok': False, 'error': '此帳號已經註冊過'})
    member = Member(username=username, name=name)
    member.set_password(password)
    member.save()
    return JsonResponse({'ok': True, 'member': member_to_dict(member)})

@csrf_exempt
def api_member_login(request):
    if request.method != 'POST':
        return JsonResponse({'ok': False, 'error': '只接受 POST'}, status=405)
    data = read_json(request)
    username = (data.get('username') or '').strip()
    password = (data.get('password') or '').strip()
    try:
        member = Member.objects.get(username=username)
    except Member.DoesNotExist:
        return JsonResponse({'ok': False, 'error': '帳號或密碼錯誤'})
    if not member.check_password(password):
        return JsonResponse({'ok': False, 'error': '帳號或密碼錯誤'})
    return JsonResponse({'ok': True, 'member': member_to_dict(member)})


def api_member_info(request):
    username = (request.GET.get('username') or '').strip()
    if not username:
        return JsonResponse({'ok': False, 'error': '請先登入會員'})
    try:
        member = Member.objects.get(username=username)
    except Member.DoesNotExist:
        return JsonResponse({'ok': False, 'error': '會員不存在，請重新登入'})
    return JsonResponse({'ok': True, 'member': member_to_dict(member)})

@csrf_exempt
def api_member_add_points(request):
    if request.method != 'POST':
        return JsonResponse({'ok': False, 'error': '只接受 POST'}, status=405)
    data = read_json(request)
    username = (data.get('username') or '').strip()
    reason = (data.get('reason') or '').strip()
    try:
        points = int(data.get('points') or 0)
    except (TypeError, ValueError):
        return JsonResponse({'ok': False, 'error': '點數格式錯誤'})
    if not username:
        return JsonResponse({'ok': False, 'error': '請先登入會員'})
    if points <= 0:
        return JsonResponse({'ok': False, 'error': '點數必須大於 0'})
    if points > 1000:
        return JsonResponse({'ok': False, 'error': '單次點數不可超過 1000'})
    try:
        member = Member.objects.get(username=username)
    except Member.DoesNotExist:
        return JsonResponse({'ok': False, 'error': '會員不存在，請重新登入'})
    member.points += points
    member.save(update_fields=['points'])
    return JsonResponse({'ok': True, 'member': member_to_dict(member), 'addedPoints': points, 'reason': reason})

@csrf_exempt
def api_member_redeem_points(request):
    if request.method != 'POST':
        return JsonResponse({'ok': False, 'error': '只接受 POST'}, status=405)
    data = read_json(request)
    username = (data.get('username') or '').strip()
    reward_code = (data.get('rewardCode') or '').strip().upper()
    if not username:
        return JsonResponse({'ok': False, 'error': '請先登入會員'})
    reward = POINT_COUPON_REWARDS.get(reward_code)
    if not reward:
        return JsonResponse({'ok': False, 'error': '找不到此點數兌換項目'})
    try:
        member = Member.objects.get(username=username)
    except Member.DoesNotExist:
        return JsonResponse({'ok': False, 'error': '會員不存在，請重新登入'})
    if member.points < reward['cost']:
        return JsonResponse({'ok': False, 'error': f'會員點數不足，還差 {reward["cost"] - member.points} 點'})

    member.points -= reward['cost']
    member.save(update_fields=['points'])

    coupon = {
        'code': reward['code'],
        'level': '點數兌換',
        'discount': reward['discount'],
        'text': reward['text'],
        'cost': reward['cost'],
        'claimedAt': timezone.localtime().strftime('%Y/%m/%d %H:%M:%S'),
        'used': False,
    }
    return JsonResponse({'ok': True, 'member': member_to_dict(member), 'coupon': coupon})

@csrf_exempt
def api_order_create(request):
    if request.method != 'POST':
        return JsonResponse({'ok': False, 'error': '只接受 POST'}, status=405)
    data = read_json(request)
    username = (data.get('member') or '').strip()
    name = (data.get('name') or '').strip()
    phone = (data.get('phone') or '').strip()
    address = (data.get('address') or '').strip()
    items = data.get('items') or []
    if not username:
        return JsonResponse({'ok': False, 'error': '請先登入會員才能送出訂單'})
    if not name or not phone or not address:
        return JsonResponse({'ok': False, 'error': '請完整填寫資料'})
    if not items:
        return JsonResponse({'ok': False, 'error': '請先加入商品'})
    try:
        member = Member.objects.get(username=username)
    except Member.DoesNotExist:
        return JsonResponse({'ok': False, 'error': '會員不存在，請重新登入'})

    subtotal = 0
    normalized_items = []
    for raw in items:
        try:
            product_id = int(raw.get('id'))
            qty = int(raw.get('quantity'))
        except (TypeError, ValueError):
            return JsonResponse({'ok': False, 'error': '商品資料格式錯誤'})
        if qty <= 0:
            return JsonResponse({'ok': False, 'error': '商品數量不可小於 1'})
        try:
            product = Product.objects.get(external_id=product_id, is_active=True)
        except Product.DoesNotExist:
            return JsonResponse({'ok': False, 'error': f'商品不存在：{product_id}'})

        option = resolve_package_option(product, raw.get('optionId'))
        item_price = int(option['price'])
        option_label = option.get('label') or '單件'
        item_name = product.name if option_label == '單件' else f'{product.name}（{option_label}）'

        if qty > product.stock:
            return JsonResponse({'ok': False, 'error': f'{item_name} 庫存不足，目前只剩 {product.stock} 組'})
        subtotal += item_price * qty
        normalized_items.append((product, qty, item_name, item_price))

    discount = max(0, int(data.get('discount') or 0))
    shipping_fee = max(0, int(data.get('shippingFee') or 0))
    total = max(0, subtotal - discount + shipping_fee)

    order = Order.objects.create(
        order_no=make_order_no(),
        member=member,
        customer_name=name,
        phone=phone,
        address=address,
        subtotal=subtotal,
        discount=discount,
        coupon=(data.get('coupon') or '').strip(),
        shipping_fee=shipping_fee,
        shipping_method=(data.get('shippingMethod') or 'store'),
        total=total,
        status=Order.STATUS_PROCESSING,
    )
    for product, qty, item_name, item_price in normalized_items:
        OrderItem.objects.create(
            order=order,
            product=product,
            product_external_id=product.external_id,
            name=item_name,
            price=item_price,
            quantity=qty,
            emoji=product.emoji,
        )
        product.stock = max(0, product.stock - qty)
        product.save(update_fields=['stock'])

    earned_points = total // 10
    member.points += earned_points
    member.save(update_fields=['points'])

    return JsonResponse({
        'ok': True,
        'order': order_to_dict(order),
        'earnedPoints': earned_points,
        'memberPoints': member.points,
    })

def api_order_search(request):
    phone = (request.GET.get('phone') or '').strip()
    if not phone:
        return JsonResponse({'ok': False, 'error': '請輸入電話', 'orders': []})
    orders = Order.objects.filter(phone=phone).prefetch_related('items', 'member')
    return JsonResponse({'ok': True, 'orders': [order_to_dict(o) for o in orders]})

def api_my_orders(request):
    username = (request.GET.get('username') or '').strip()
    if not username:
        return JsonResponse({'ok': False, 'error': '請先登入會員', 'orders': []})
    orders = Order.objects.filter(member__username=username).prefetch_related('items', 'member')
    return JsonResponse({'ok': True, 'orders': [order_to_dict(o) for o in orders]})

@csrf_exempt
def api_order_cancel(request):
    if request.method != 'POST':
        return JsonResponse({'ok': False, 'error': '只接受 POST'}, status=405)
    data = read_json(request)
    order_no = (data.get('orderNo') or '').strip()
    try:
        order = Order.objects.get(order_no=order_no)
    except Order.DoesNotExist:
        return JsonResponse({'ok': False, 'error': '找不到此訂單'})

    if order.status == Order.STATUS_CANCELLED:
        return JsonResponse({'ok': False, 'error': '此訂單已取消，不能重複取消'})
    if not order.can_cancel():
        return JsonResponse({'ok': False, 'error': f'此訂單狀態為「{order.status}」，商品已出貨或已進入配送流程，無法取消'})

    order.status = Order.STATUS_CANCELLED
    order.save(update_fields=['status'])

    for item in order.items.select_related('product'):
        if item.product:
            item.product.stock += item.quantity
            item.product.save(update_fields=['stock'])

    return JsonResponse({'ok': True, 'order': order_to_dict(order)})
