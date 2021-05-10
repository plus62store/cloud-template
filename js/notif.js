
    const icon = document.querySelector(
'ion-dot');
    icon.addEventListener('click', handleIconClick);

    async function handleIconClick() {
      const alert = await alertController.create({
        header: '',
        message: '<center><a href="https://shp.ee/kp86k3b"><img style="width:200px;height:200px;border-radius:8px;" src="/images/promo.jpeg" /></a></center>',
        buttons: ['Nanti Saja']
      });

      await alert.present();
    }
