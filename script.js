// حساب عدد الزوار باستخدام JavaScript
let visitorCount = localStorage.getItem('visitorCount');
if (!visitorCount) {
  visitorCount = 0;
}

visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// عرض عدد الزوار في الصفحة
document.getElementById('visitor-count').innerText = visitorCount;

// تحديث عدد التحميلات في حالة تريد تحميل بيانات من مصدر خارجي
let downloadCount = 1500; // العدد الافتراضي
document.getElementById('download-count').innerText = downloadCount;

// كود لزيادة التحميلات (يمكنك تخصيصه لإرسال الزيادة إلى قاعدة بيانات أو تخزين خارجي)
document.querySelector('.download-btn').addEventListener('click', function() {
  downloadCount++;
  document.getElementById('download-count').innerText = downloadCount;

  // على سبيل المثال، يمكنك إرسال الطلب إلى قاعدة بيانات لتحديث عدد التحميلات
  alert('تمت إضافة تحميل جديد!');
});
