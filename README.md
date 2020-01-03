# MyPin

![alt text](https://github.com/corina-s/myPin/blob/master/app/assets/images/logo2.png "Logo Title Text 1")

myPin is a single-page application inspired by Pinterest. Users can create boards, and save a collection of Pins to each board. Pins are image-type elements that can be created by the User or saved to a board from the home feed.

## Live Link
https://mypin1.herokuapp.com/

## Technologies

MyPin runs on the Rails framework and is hosted on Heroku. Rails is used strictly as a RESTful API, returning JSON data and interpreted by React.js in the frontend.

As a single-page application, React.js and Redux.js are used in frontend to manage frontend data. Node package manager (npm) is used to install all of the frontend dependencies.

AWS S3 is used for managing photos that users upload. And PostgreSQL is used for managing database except photos. AJAX requests are used for communication with rails backend.

## Features
1. User authentication
2. User profile feed
3. Boards
  *  Create, 
  *  Edit,
  *  Remove 
4. Pins
  *  Create, 
  *  Edit,
  *  Remove 
5. Save a pin to a board
6. Home feed with masonry layout
7. Modal forms

## Features details
### Modal Forms
* The myPin login/signup and create forms on have been implemented using modals. A modal component was utilized to render the correct forms based on switch cases. 
* The modals can be closed by clicking on the backgroud, however the splash cannot be accessed if a user is not logged in.
![alt text](https://github.com/corina-s/myPin/blob/master/app/assets/images/modal_login.png "Login Modal")
### CSS Masonry Layout
The mosaic-like appearance of a Pinterest feed on the home page and progile page was achieved using a CSS grid. Image sizes and columns are adjusted based on the size of the screen.

![alt text](https://github.com/corina-s/myPin/blob/master/app/assets/images/profile.png "Profile")

## Technical challenges
1. To allow boards to have many pins and pins to belong to many boards, and conserve space while improving scalability, I used polymorphic associations on the back end.
```ruby
    belongs_to :author,
        class_name: 'User',
        foreign_key: :author_id

    has_and_belongs_to_many :boards

    has_many :users,
        through: :boards,
        source: :author
```
2. Custom action on the backend to save a pin to a board
3. Front End routing for smooth rendering of the components
4. Front End profile component designing: I used a Tabs component and a Header's component to enable display of two tabs in the profile to render the user's pins or the users'boards on select of the tab's header.
```javascript
export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedPane: 0
        };
        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(num) {
        this.setState({ selectedPane: num });
    }

    render() {
        const pane = this.props.panes[this.state.selectedPane];

        return (
            <div className='profile-tabs'>
                <div className='tabs'>
                    <Headers
                        selectedPane={this.state.selectedPane}
                        onTabChosen={this.selectTab}
                        panes={this.props.panes}>
                    </Headers>
                    <div className='tab-content'>
                        <article>
                            {pane.content}
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}
```

## Future Implementations
* Search bar
* Followers for boards and users

