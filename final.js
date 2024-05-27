<!-- 사이드 메뉴 시작 -->
    <script>
        function openMenu() {
            document.querySelector('.sidebar').style.width = "200px"; // 사이드바 넓이
            document.querySelector('.mobileBut').style.display = 'none';
        }

        function  closeMenu() {
            document.getElementById("mobileMain").style.marginRight= "110px";
            document.querySelector('.sidebar').style.width = "0";
            document.querySelector('.mobileBut').style.display = 'block';
        }

    </script>




    <!-- 이미지 시작 -->
    <script>
        const gallery = document.getElementById('gallery');
        const hiddenImgs = document.getElementById('hiddenImgs');
        const continueEx = document.getElementById('continueEx')
        const showMore = document.getElementById('showMore');

        showMore.addEventListener('click', function (){
            hiddenImgs.style.display = 'block';
            continueEx.style.display = 'none';
            showMore.style.display = 'none';
        });

        /* 이미지 모달창 표시 설정 */
        function showModal(imgSrc) {
            const modal = document.getElementById("imageModal");
            const modalImg = document.getElementById("modalImage");
            modal.style.display = "block";
            modalImg.src =imgSrc;  // modalImg 요소의 src속성에 imgSrc값 할당 (모달창 내부에 있는 <img>요소의 소스가 imgSrc값으로 변경되어 해당 이미지가 모달창에 표시됨.
        }

        /* 이미지 모달창 닫기 설정 */
        function closeModal() {
            const modal = document.getElementById("imageModal");
            modal.style.display = "none";
        }

        /* 이미지 클릭 이벤트 리스너 추가 */
        const galleryImages = document.querySelectorAll("#gallery img");  // id가 "gallery"인 요소 내부의 모든 <img> 요소를 선택
        galleryImages.forEach(function(img) {    // galleryImages NodeList의 각 요소(이미지)에 대해 클릭 이벤트 리스너를 추가
            img.addEventListener("click", function() {
                showModal(this.src); // this.src = 클릭된 이미지의 소스
            });
        });

        // 모달창 닫기 버튼 클릭 이벤트 리스너 추가
        const closeBtn = document.querySelector(".close");
        closeBtn.addEventListener("click", closeModal);

        // 숨겨진 이미지들에 대해서도 클릭 이벤트 리스너 추가
        const hiddenImages = document.querySelectorAll("#hiddenImgs img");
        hiddenImages.forEach(function(img) {
            img.addEventListener("click", function() {
                showModal(this.src);
            });
        });
    </script>

    <!-- 지도 시작 -->
    <script type="text/javascript" src="//dapi.kakao.com/v2/maps/sdk.js?appkey=20719926bb335b7c09a4e4374833cf98">
    </script>
    <script>
        var mapContainer = document.getElementById('map');
        var mapOption = {
            center: new kakao.maps.LatLng(37.525818, 126.928446),
            level: 2
        };
        var map = new kakao.maps.Map(mapContainer, mapOption);

        /* 지도타입 컨트롤의 지도 또는 스카이뷰 버튼을 클릭하면 호출되어 지도타입을 바꾸는 함수 */
        function setMapType(maptype) {
            var roadmapControl = document.getElementById('btnRoadmap');
            var skyviewControl = document.getElementById('btnSkyview');
            if (maptype === 'roadmap') {
                map.setMapTypeId(kakao.maps.MapTypeId.ROADMAP);
                roadmapControl.className = 'selected_btn';
                skyviewControl.className = 'btn';
            } else {
                map.setMapTypeId(kakao.maps.MapTypeId.HYBRID);
                skyviewControl.className = 'selected_btn';
                roadmapControl.className = 'btn';
            }
        }

        // 지도 확대, 축소 컨트롤에서 확대 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
        function zoomIn() {
            map.setLevel(map.getLevel() - 1);
        }

        // 지도 확대, 축소 컨트롤에서 축소 버튼을 누르면 호출되어 지도를 확대하는 함수입니다
        function zoomOut() {
            map.setLevel(map.getLevel() + 1);
        }

        // 마커가 표시될 위치입니다
        var markerPosition  = new kakao.maps.LatLng(37.525818, 126.928446);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

    </script>

    <!-- sub Modal 창 시작 -->
    <script>
        // 모달창 열기 버튼 가져오기 //
        var subModal = document.getElementById("subModal");
        var subButton = document.getElementById("subButton");

        // 모달창 열기 //
        subButton.onclick = function (){
            subModal.style.display = "block";
        }

        // 모달창 닫기
        var subModalClose = document.getElementById("subModalclose");
        subModalClose.onclick = function (){
            subModal.style.display = "none";
        }

        // 밖에 클릭하면 모달창 닫기 //
        window.onclick = function(event) {
            if (event.target == subModal) {
                subModal.style.display = "none";
            }
        }
    </script>

    <!-- scroll 버튼 -->
    <script>
        const arrowBefore = document.getElementById('arrowbefore');
        const arrowAfter = document.getElementById('arrowafter');

        const scrollBut = document.getElementById('scrollBut');
        scrollBut.addEventListener('mouseover', showArrowAfter);
        scrollBut.addEventListener('mouseout', showArrowBefore);

        function showArrowAfter() {
            arrowBefore.style.display = 'none';
            arrowAfter.style.display = 'inline';
        }

        function showArrowBefore() {
            arrowBefore.style.display = 'inline';
            arrowAfter.style.display = 'none';
        }

        function scrollToTop() {
            window.scrollTo({top:0, behavior:'smooth'});
        }
    </script>
