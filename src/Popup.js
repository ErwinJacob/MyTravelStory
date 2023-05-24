import React from 'react';
import "./Popup.css"

function Popup(props) {
    return (
        <div className="popupContainer">
            <button className="closeButton" onClick={props.handleClose}>X</button>
            <div className="popupContent">

                <div className="countryName">
                    <style>
                        @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@500&display=swap');
                    </style>
                    {props.country}
                </div>

                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel massa et eros scelerisque venenatis. Duis at risus leo. Vestibulum faucibus volutpat orci, quis dictum sem sagittis vel. Etiam in est nec eros aliquet sollicitudin. Ut sagittis, eros sit amet suscipit hendrerit, enim nulla accumsan metus, eget suscipit tellus metus in nisl. Nulla tristique mollis orci, et pretium nisl gravida nec. Phasellus molestie dolor tellus, in sollicitudin turpis tempus et. Etiam nec magna mi. Nunc justo turpis, fringilla ac mi id, pharetra mattis lacus. Maecenas posuere, sapien sit amet dapibus aliquam, leo turpis auctor massa, et iaculis tortor nisl in magna. Vivamus in magna ultrices tortor aliquet sollicitudin in aliquam nisl.
                <br/><br/><br/>
                Sed purus metus, maximus vitae mollis ac, bibendum at velit. Etiam fermentum, nibh eget placerat porttitor, ante erat feugiat diam, non faucibus lectus nunc in urna. In ut mi varius, dapibus massa nec, lobortis nunc. Mauris consequat fermentum vestibulum. Aliquam tincidunt risus libero, sed porttitor est interdum sit amet. Mauris id gravida lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris ac lectus in libero consequat lobortis. Nam fringilla nibh est, ut varius mauris placerat at. Sed at justo id mauris luctus gravida ac quis neque. Suspendisse quis finibus felis, a pulvinar diam.
                <br/><br/><br/>
                Aenean sagittis, justo sit amet efficitur aliquet, felis eros bibendum neque, sit amet elementum lorem libero vitae libero. Fusce sed finibus ex, a rutrum nibh. Vivamus mattis dui dui, vel venenatis odio maximus eu. Maecenas ipsum lectus, finibus vel laoreet feugiat, ullamcorper et nisl. Donec dictum, dui lobortis interdum sollicitudin, erat tortor pellentesque metus, nec commodo odio leo eu magna. Donec vel magna ac neque porta congue quis a velit. Nunc tristique neque a ante dapibus, sit amet condimentum tortor elementum.
                <br/><br/><br/>
                Proin vitae nunc in mi congue malesuada. Nulla sit amet sapien eros. Cras maximus nisi orci, in ullamcorper ex fermentum iaculis. Aliquam in nibh blandit, ullamcorper ipsum a, porta orci. Vestibulum efficitur risus a dui accumsan, quis cursus turpis mattis. Vestibulum convallis, ipsum ac aliquam sodales, purus risus iaculis tellus, sed laoreet sapien augue et lorem. Integer condimentum odio et elementum ultrices.
                <br/><br/><br/>
                In convallis nunc non ex blandit posuere. Quisque vestibulum facilisis turpis, in porttitor metus efficitur a. Nullam egestas pharetra hendrerit. Morbi vitae nunc convallis lectus tristique aliquet et pellentesque libero. Pellentesque scelerisque tristique ultricies. Morbi suscipit sodales finibus. Nulla facilisi. Fusce id erat suscipit, egestas diam a, faucibus leo.
                <br/><br/><br/>
                Donec dui enim, volutpat et rutrum sit amet, suscipit vel elit. Ut eget condimentum tellus, sit amet feugiat sapien. Nulla facilisi. Praesent a nisl eu enim pulvinar feugiat. Ut congue ac elit non fermentum. Vestibulum gravida aliquet eleifend. Donec sollicitudin sapien sed dapibus congue. Quisque rhoncus lobortis malesuada. Ut rhoncus efficitur lorem nec porta. Curabitur viverra in mi pulvinar pharetra. Interdum et malesuada fames ac ante ipsum primis in faucibus.
                <br/><br/><br/>
                Fusce ultricies ligula ut dolor egestas, in vestibulum nisi imperdiet. Quisque eget euismod felis. Maecenas cursus eros lacus, rutrum lobortis ligula iaculis sit amet. Suspendisse a eros justo. Maecenas in commodo odio, vel sagittis nisi. Nam rutrum eleifend diam vitae rutrum. Mauris mollis magna non mauris consequat aliquet. Curabitur finibus pellentesque eros vitae consequat. Nam tristique, dolor et bibendum pulvinar, arcu arcu sagittis leo, ut placerat arcu sapien vitae justo. Nam placerat eros a pretium tempus. Nulla ante diam, luctus at arcu ac, consequat euismod urna. Sed ac neque et tellus interdum condimentum.
                <br/><br/><br/>
                Maecenas mollis congue leo et posuere. Ut cursus feugiat iaculis. In rutrum iaculis sem, sit amet congue orci interdum non. Aliquam bibendum hendrerit laoreet. Nunc ultricies risus enim, sit amet efficitur arcu pharetra sed. Duis enim velit, ultrices eu pharetra eget, cursus nec urna. Sed eleifend porta nisl a viverra.
                <br/><br/><br/>
                Ut vel elit lectus. Nulla facilisi. Morbi a eros id nulla molestie congue vel eget nibh. Sed ac semper ante. Donec vitae fringilla ligula. In efficitur felis id eros tempor, sed commodo arcu vulputate. Pellentesque ac dolor lacus. Aliquam id ultricies libero. Sed quis est eu mauris tincidunt aliquet at ac est. Interdum et malesuada fames ac ante ipsum primis in faucibus. Pellentesque faucibus eget sem ut congue.
                <br/><br/><br/>
                Phasellus gravida fringilla diam, a finibus diam. Nunc ut facilisis mauris. Sed ultrices fringilla mi, at elementum arcu tincidunt ac. Pellentesque eu diam urna. Pellentesque sagittis ipsum sem, in dapibus velit tincidunt laoreet. Curabitur faucibus maximus fringilla. Morbi sagittis, sapien vitae porta porttitor, lacus libero mattis arcu, eget varius augue enim et libero. Quisque ut nisl feugiat, sodales ante eget, tincidunt diam. Etiam fringilla congue pharetra. In porta lorem turpis, non convallis enim lacinia ut. Phasellus eleifend nec nisl volutpat semper. Vivamus pulvinar tristique eleifend. Etiam sagittis urna sit amet viverra pellentesque.



                <br/><br/><br/>

            </div>
        </div>
    );
}

export default Popup;