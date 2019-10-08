import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Posts';

  posts = [
    {
      title : 'Premier post',
      content : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce scelerisque nisi eget imperdiet viverra. Pellentesque nec tristique urna, ac imperdiet tellus. In hac habitasse platea dictumst.',
      createdAt: new Date(),
      loveIts: 3
    },
    {
      title : 'Second post',
      content : 'Vivamus luctus et ipsum nec tincidunt. Morbi vitae diam lectus. Praesent interdum lectus quis eros imperdiet hendrerit eu non libero. Curabitur sit amet imperdiet lectus.',
      createdAt: new Date(),
      loveIts: -1
    },
    {
      title : 'Il en reste encore',
      content : 'In ornare eu nulla non malesuada. Integer accumsan, est ut interdum cursus, felis ligula ullamcorper nisi, id lacinia ex ligula quis urna. Donec a turpis sit amet dolor porta volutpat. Curabitur egestas neque a augue condimentum suscipit pharetra et metus.',
      createdAt: new Date(),
      loveIts: 0
    }
  ]
}
