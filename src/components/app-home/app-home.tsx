import { Component } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css'
})
export class AppHome {

  render() {
    return (
            <section class="bg-primary text-centered text-white" id="main">
                <div class="center">
                    <h1>Fusion Security</h1>
                    <h3>coming soon</h3>
                    <p class="has-top-margin">Contact Connor Borchgrevink at connor.borkgrevink@fusionsecurity.co to
                        learn more.</p>
                </div>
            </section>
        )
    ;
  }
}
