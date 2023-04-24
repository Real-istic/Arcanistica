class Ui extends DrawableObject {

  constructor(path, x, y, width, height) {
    super();
    this.loadImage(path);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.checkForCooldowns();
  }

  /**
   * checks if the cooldowns are refreshed and sets the opacity of the buttons accordingly
   */
  checkForCooldowns() {
    setInterval(() => {
      this.setFireballOpacity()
      this.setFirewallOpacity()
    }, 100);
  }

  /**
   * sets the opacity of the fireball-button
   */
  setFireballOpacity() {
    let fireballButton = document.getElementById('fireballButton');
    if (world.character.fireballCooldown <= 0) {
      fireballButton.style.opacity = 1;
      fireballButton.style.cursor = 'pointer';
    } else {
      fireballButton.style.opacity = 0.5;
      fireballButton.style.cursor = 'not-allowed';
    }
  }

  /**
   * sets the opacity of the firewall-button
   */
  setFirewallOpacity() {
    let firewallButton = document.getElementById('firewallButton');
    if (world.character.firewallCooldown <= 0) {
      firewallButton.style.opacity = 1;
      firewallButton.style.cursor = 'pointer';
    } else {
      firewallButton.style.opacity = 0.5;
      firewallButton.style.cursor = 'not-allowed';
    }
  }

}