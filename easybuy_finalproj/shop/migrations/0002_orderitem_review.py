from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('shop', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='orderitem',
            name='review_rating',
            field=models.PositiveSmallIntegerField(blank=True, null=True, verbose_name='評分'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='review_comment',
            field=models.TextField(blank=True, verbose_name='評價內容'),
        ),
        migrations.AddField(
            model_name='orderitem',
            name='review_created_at',
            field=models.DateTimeField(blank=True, null=True, verbose_name='評價時間'),
        ),
    ]
