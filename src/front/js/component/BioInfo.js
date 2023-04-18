import React from "react";
import berrin from "../../img/berrin.png";
import fisher from "../../img/fisher.png";

const BioInfo = (props) => {
  console.log(props.image);
  return (
    <div className="bio-container">
      <h1 className="bio-name">{props.name}</h1>
      {/* <h2 className="bio-title">{props.title}</h2> */}
      {props.num == "1" ? (
        <div>


          <p className="bio-text">
            <p className="services">
              <img className="bio-img" src={berrin} alt="profile picture" />
              Robert G. Berrin is a real estate investor and the President and
              Co-Owner of Capital Realty Services, Inc. (since October 1988), a
              full service commercial real estate brokerage firm, specializing
              in the management and leasing of commercial properties, exclusive
              tenant representation, as well as acquisition and sale of
              commercial properties. His professional experience also includes
              consultation with real estate clients regarding sales, leasing,
              management and financing considerations of real estate ownership,
              sales or acquisition. Since July 1972, Mr. Berrin has also been
              the promoter and managing general partner of numerous real estate
              properties, primarily commercial and income producing and is also
              responsible for the management, leasing and disposition of said
              properties, together with his business partner in Capital Realty,
              Isaac K. Fisher.
            </p>
            <p className="services">
              Mr. Berrin is a member of the Board of Directors of First National
              Bank of South Miami, South Miami, Florida (since March 2009), and
              also serves on the bank’s Executive Loan Committee. He is also an
              attorney and member of the Florida Bar and actively practiced from
              June 1977 to May 1987.
            </p>
            <p className="services">
              {" "}
              Mr. Berrin is actively involved in numerous charitable and civic
              organizations, He currently serves as Chair of the Baptist Health
              of South Florida Foundation and is a former Chair of the Board of
              the Greater Miami Jewish Federation (2014-2016) and currently
              serves as an executive board member. He is also a member of the
              Dean’s Advisory Council of the College of Medicine, Florida
              International University (2008 to Present).
            </p>
            <p className="services">
              {" "}
              Mr. Berrin was born and raised in Miami, Florida and received his
              undergraduate degree from the University of Florida and his law
              degree from the University of Miami.
            </p>
          </p>
        </div>
      ) : (
        <div>

          <p className="bio-text">
            {" "}
            <p className="services">
              <img className="bio-img" src={fisher} alt="profile picture" />
              Isaac “Ike” K. Fisher grew up in Hollywood, Florida. He came to
              live and work in Miami after graduating from the University of
              Florida College of Law, previously receiving his undergraduate
              education at The George Washington University, Washington D.C.
            </p>
            <p className="services">
              Mr. Fisher is a real estate investor and a principal of Capital
              Realty Services, Inc., a diversified real estate company providing
              management, leasing, financing, sales and consulting services for
              commercial investments. He has been a partner in commercial real
              estate with Robert G. Berrin through Capital Realty since 1988.
              Prior to joining Capital Realty, he was vice president of
              Sonnenblick-Goldman Southeast Corp. Earlier in his career, Mr.
              Fisher practiced law in a variety of capacities in Florida and in
              Tel Aviv, Israel. He is a member of the Florida Bar, and an
              inactive member of the Israel Chamber of Advocates.
            </p>{" "}
            <p className="services">
              {" "}
              He is active in Jewish philanthropies and other national and
              community charitable organizations. He is a National Board of
              Directors Alumni of AIPAC and is the past Chair of the Greater
              Miami Jewish Federation.
            </p>
            <p className="services">
              He resides in Miami, Florida and Tel Aviv, Israel.
            </p>
          </p>
        </div>
      )}

      {/* <p className="bio-text">{props.bio}</p> */}
    </div>
  );
};

export default BioInfo;
